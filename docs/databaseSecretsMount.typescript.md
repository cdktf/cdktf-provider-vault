# `databaseSecretsMount` Submodule <a name="`databaseSecretsMount` Submodule" id="@cdktf/provider-vault.databaseSecretsMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretsMount <a name="DatabaseSecretsMount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount vault_database_secrets_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMount(scope: Construct, id: string, config: DatabaseSecretsMountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra">putCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase">putCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch">putElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana">putHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb">putInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb">putMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas">putMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql">putMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora">putMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy">putMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds">putMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle">putOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis">putRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache">putRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake">putSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra">resetCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase">resetCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch">resetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana">resetHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb">resetInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb">resetMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas">resetMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql">resetMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora">resetMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy">resetMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds">resetMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle">resetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis">resetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache">resetRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake">resetSnowflake</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCassandra` <a name="putCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra"></a>

```typescript
public putCassandra(value: IResolvable | DatabaseSecretsMountCassandra[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]

---

##### `putCouchbase` <a name="putCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase"></a>

```typescript
public putCouchbase(value: IResolvable | DatabaseSecretsMountCouchbase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]

---

##### `putElasticsearch` <a name="putElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch"></a>

```typescript
public putElasticsearch(value: IResolvable | DatabaseSecretsMountElasticsearch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]

---

##### `putHana` <a name="putHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana"></a>

```typescript
public putHana(value: IResolvable | DatabaseSecretsMountHana[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]

---

##### `putInfluxdb` <a name="putInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb"></a>

```typescript
public putInfluxdb(value: IResolvable | DatabaseSecretsMountInfluxdb[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]

---

##### `putMongodb` <a name="putMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb"></a>

```typescript
public putMongodb(value: IResolvable | DatabaseSecretsMountMongodb[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]

---

##### `putMongodbatlas` <a name="putMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas"></a>

```typescript
public putMongodbatlas(value: IResolvable | DatabaseSecretsMountMongodbatlas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]

---

##### `putMssql` <a name="putMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql"></a>

```typescript
public putMssql(value: IResolvable | DatabaseSecretsMountMssql[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql"></a>

```typescript
public putMysql(value: IResolvable | DatabaseSecretsMountMysql[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]

---

##### `putMysqlAurora` <a name="putMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora"></a>

```typescript
public putMysqlAurora(value: IResolvable | DatabaseSecretsMountMysqlAurora[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]

---

##### `putMysqlLegacy` <a name="putMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy"></a>

```typescript
public putMysqlLegacy(value: IResolvable | DatabaseSecretsMountMysqlLegacy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]

---

##### `putMysqlRds` <a name="putMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds"></a>

```typescript
public putMysqlRds(value: IResolvable | DatabaseSecretsMountMysqlRds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle"></a>

```typescript
public putOracle(value: IResolvable | DatabaseSecretsMountOracle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql"></a>

```typescript
public putPostgresql(value: IResolvable | DatabaseSecretsMountPostgresql[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]

---

##### `putRedis` <a name="putRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis"></a>

```typescript
public putRedis(value: IResolvable | DatabaseSecretsMountRedis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]

---

##### `putRedisElasticache` <a name="putRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache"></a>

```typescript
public putRedisElasticache(value: IResolvable | DatabaseSecretsMountRedisElasticache[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]

---

##### `putRedshift` <a name="putRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift"></a>

```typescript
public putRedshift(value: IResolvable | DatabaseSecretsMountRedshift[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]

---

##### `putSnowflake` <a name="putSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake"></a>

```typescript
public putSnowflake(value: IResolvable | DatabaseSecretsMountSnowflake[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys"></a>

```typescript
public resetAllowedManagedKeys(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetCassandra` <a name="resetCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra"></a>

```typescript
public resetCassandra(): void
```

##### `resetCouchbase` <a name="resetCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase"></a>

```typescript
public resetCouchbase(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetElasticsearch` <a name="resetElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch"></a>

```typescript
public resetElasticsearch(): void
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess"></a>

```typescript
public resetExternalEntropyAccess(): void
```

##### `resetHana` <a name="resetHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana"></a>

```typescript
public resetHana(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfluxdb` <a name="resetInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb"></a>

```typescript
public resetInfluxdb(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetMongodb` <a name="resetMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb"></a>

```typescript
public resetMongodb(): void
```

##### `resetMongodbatlas` <a name="resetMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas"></a>

```typescript
public resetMongodbatlas(): void
```

##### `resetMssql` <a name="resetMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql"></a>

```typescript
public resetMssql(): void
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql"></a>

```typescript
public resetMysql(): void
```

##### `resetMysqlAurora` <a name="resetMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora"></a>

```typescript
public resetMysqlAurora(): void
```

##### `resetMysqlLegacy` <a name="resetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy"></a>

```typescript
public resetMysqlLegacy(): void
```

##### `resetMysqlRds` <a name="resetMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds"></a>

```typescript
public resetMysqlRds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle"></a>

```typescript
public resetOracle(): void
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql"></a>

```typescript
public resetPostgresql(): void
```

##### `resetRedis` <a name="resetRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis"></a>

```typescript
public resetRedis(): void
```

##### `resetRedisElasticache` <a name="resetRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache"></a>

```typescript
public resetRedisElasticache(): void
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift"></a>

```typescript
public resetRedshift(): void
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap"></a>

```typescript
public resetSealWrap(): void
```

##### `resetSnowflake` <a name="resetSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake"></a>

```typescript
public resetSnowflake(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

databaseSecretsMount.DatabaseSecretsMount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

databaseSecretsMount.DatabaseSecretsMount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

databaseSecretsMount.DatabaseSecretsMount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount">engineCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora">mysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy">mysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds">mysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache">redisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput">cassandraInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput">couchbaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput">elasticsearchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput">hanaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput">influxdbInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput">mongodbatlasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput">mongodbInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput">mssqlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput">mysqlAuroraInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput">mysqlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput">mysqlLegacyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput">mysqlRdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput">oracleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput">postgresqlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput">redisElasticacheInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput">redisInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput">redshiftInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput">sealWrapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput">snowflakeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `cassandra`<sup>Required</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra"></a>

```typescript
public readonly cassandra: DatabaseSecretsMountCassandraList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a>

---

##### `couchbase`<sup>Required</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase"></a>

```typescript
public readonly couchbase: DatabaseSecretsMountCouchbaseList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: DatabaseSecretsMountElasticsearchList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a>

---

##### `engineCount`<sup>Required</sup> <a name="engineCount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount"></a>

```typescript
public readonly engineCount: number;
```

- *Type:* number

---

##### `hana`<sup>Required</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana"></a>

```typescript
public readonly hana: DatabaseSecretsMountHanaList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a>

---

##### `influxdb`<sup>Required</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb"></a>

```typescript
public readonly influxdb: DatabaseSecretsMountInfluxdbList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a>

---

##### `mongodb`<sup>Required</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb"></a>

```typescript
public readonly mongodb: DatabaseSecretsMountMongodbList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a>

---

##### `mongodbatlas`<sup>Required</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas"></a>

```typescript
public readonly mongodbatlas: DatabaseSecretsMountMongodbatlasList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a>

---

##### `mssql`<sup>Required</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql"></a>

```typescript
public readonly mssql: DatabaseSecretsMountMssqlList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql"></a>

```typescript
public readonly mysql: DatabaseSecretsMountMysqlList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a>

---

##### `mysqlAurora`<sup>Required</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora"></a>

```typescript
public readonly mysqlAurora: DatabaseSecretsMountMysqlAuroraList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a>

---

##### `mysqlLegacy`<sup>Required</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy"></a>

```typescript
public readonly mysqlLegacy: DatabaseSecretsMountMysqlLegacyList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a>

---

##### `mysqlRds`<sup>Required</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds"></a>

```typescript
public readonly mysqlRds: DatabaseSecretsMountMysqlRdsList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle"></a>

```typescript
public readonly oracle: DatabaseSecretsMountOracleList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql"></a>

```typescript
public readonly postgresql: DatabaseSecretsMountPostgresqlList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis"></a>

```typescript
public readonly redis: DatabaseSecretsMountRedisList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a>

---

##### `redisElasticache`<sup>Required</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache"></a>

```typescript
public readonly redisElasticache: DatabaseSecretsMountRedisElasticacheList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift"></a>

```typescript
public readonly redshift: DatabaseSecretsMountRedshiftList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake"></a>

```typescript
public readonly snowflake: DatabaseSecretsMountSnowflakeList;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a>

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput"></a>

```typescript
public readonly allowedManagedKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `cassandraInput`<sup>Optional</sup> <a name="cassandraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput"></a>

```typescript
public readonly cassandraInput: IResolvable | DatabaseSecretsMountCassandra[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]

---

##### `couchbaseInput`<sup>Optional</sup> <a name="couchbaseInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput"></a>

```typescript
public readonly couchbaseInput: IResolvable | DatabaseSecretsMountCouchbase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `elasticsearchInput`<sup>Optional</sup> <a name="elasticsearchInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput"></a>

```typescript
public readonly elasticsearchInput: IResolvable | DatabaseSecretsMountElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput"></a>

```typescript
public readonly externalEntropyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hanaInput`<sup>Optional</sup> <a name="hanaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput"></a>

```typescript
public readonly hanaInput: IResolvable | DatabaseSecretsMountHana[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `influxdbInput`<sup>Optional</sup> <a name="influxdbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput"></a>

```typescript
public readonly influxdbInput: IResolvable | DatabaseSecretsMountInfluxdb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `mongodbatlasInput`<sup>Optional</sup> <a name="mongodbatlasInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput"></a>

```typescript
public readonly mongodbatlasInput: IResolvable | DatabaseSecretsMountMongodbatlas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]

---

##### `mongodbInput`<sup>Optional</sup> <a name="mongodbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput"></a>

```typescript
public readonly mongodbInput: IResolvable | DatabaseSecretsMountMongodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]

---

##### `mssqlInput`<sup>Optional</sup> <a name="mssqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput"></a>

```typescript
public readonly mssqlInput: IResolvable | DatabaseSecretsMountMssql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]

---

##### `mysqlAuroraInput`<sup>Optional</sup> <a name="mysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput"></a>

```typescript
public readonly mysqlAuroraInput: IResolvable | DatabaseSecretsMountMysqlAurora[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput"></a>

```typescript
public readonly mysqlInput: IResolvable | DatabaseSecretsMountMysql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]

---

##### `mysqlLegacyInput`<sup>Optional</sup> <a name="mysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput"></a>

```typescript
public readonly mysqlLegacyInput: IResolvable | DatabaseSecretsMountMysqlLegacy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]

---

##### `mysqlRdsInput`<sup>Optional</sup> <a name="mysqlRdsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput"></a>

```typescript
public readonly mysqlRdsInput: IResolvable | DatabaseSecretsMountMysqlRds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput"></a>

```typescript
public readonly oracleInput: IResolvable | DatabaseSecretsMountOracle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput"></a>

```typescript
public readonly postgresqlInput: IResolvable | DatabaseSecretsMountPostgresql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]

---

##### `redisElasticacheInput`<sup>Optional</sup> <a name="redisElasticacheInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput"></a>

```typescript
public readonly redisElasticacheInput: IResolvable | DatabaseSecretsMountRedisElasticache[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]

---

##### `redisInput`<sup>Optional</sup> <a name="redisInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput"></a>

```typescript
public readonly redisInput: IResolvable | DatabaseSecretsMountRedis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput"></a>

```typescript
public readonly redshiftInput: IResolvable | DatabaseSecretsMountRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput"></a>

```typescript
public readonly sealWrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snowflakeInput`<sup>Optional</sup> <a name="snowflakeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput"></a>

```typescript
public readonly snowflakeInput: IResolvable | DatabaseSecretsMountSnowflake[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretsMountCassandra <a name="DatabaseSecretsMountCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountCassandra: databaseSecretsMount.DatabaseSecretsMountCassandra = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts">hosts</a></code> | <code>string[]</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password">password</a></code> | <code>string</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle">pemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson">pemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion">protocolVersion</a></code> | <code>number</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username">username</a></code> | <code>string</code> | The username to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: number;
```

- *Type:* number

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#protocol_version DatabaseSecretsMount#protocol_version}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountConfig <a name="DatabaseSecretsMountConfig" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountConfig: databaseSecretsMount.DatabaseSecretsMountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path">path</a></code> | <code>string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra">cassandra</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]</code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase">couchbase</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]</code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch">elasticsearch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]</code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana">hana</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]</code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#id DatabaseSecretsMount#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb">influxdb</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]</code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb">mongodb</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]</code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas">mongodbatlas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]</code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql">mssql</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]</code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql">mysql</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]</code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora">mysqlAurora</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]</code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy">mysqlLegacy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]</code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds">mysqlRds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]</code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle">oracle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]</code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql">postgresql</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]</code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis">redis</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]</code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache">redisElasticache</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]</code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift">redshift</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]</code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake">snowflake</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]</code> | snowflake block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#path DatabaseSecretsMount#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_managed_keys DatabaseSecretsMount#allowed_managed_keys}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#audit_non_hmac_request_keys DatabaseSecretsMount#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#audit_non_hmac_response_keys DatabaseSecretsMount#audit_non_hmac_response_keys}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra"></a>

```typescript
public readonly cassandra: IResolvable | DatabaseSecretsMountCassandra[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]

cassandra block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#cassandra DatabaseSecretsMount#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase"></a>

```typescript
public readonly couchbase: IResolvable | DatabaseSecretsMountCouchbase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]

couchbase block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#couchbase DatabaseSecretsMount#couchbase}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#default_lease_ttl_seconds DatabaseSecretsMount#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#description DatabaseSecretsMount#description}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: IResolvable | DatabaseSecretsMountElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]

elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#elasticsearch DatabaseSecretsMount#elasticsearch}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#external_entropy_access DatabaseSecretsMount#external_entropy_access}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana"></a>

```typescript
public readonly hana: IResolvable | DatabaseSecretsMountHana[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]

hana block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hana DatabaseSecretsMount#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#id DatabaseSecretsMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb"></a>

```typescript
public readonly influxdb: IResolvable | DatabaseSecretsMountInfluxdb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]

influxdb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#influxdb DatabaseSecretsMount#influxdb}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#local DatabaseSecretsMount#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_lease_ttl_seconds DatabaseSecretsMount#max_lease_ttl_seconds}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb"></a>

```typescript
public readonly mongodb: IResolvable | DatabaseSecretsMountMongodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]

mongodb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mongodb DatabaseSecretsMount#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas"></a>

```typescript
public readonly mongodbatlas: IResolvable | DatabaseSecretsMountMongodbatlas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]

mongodbatlas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mongodbatlas DatabaseSecretsMount#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql"></a>

```typescript
public readonly mssql: IResolvable | DatabaseSecretsMountMssql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]

mssql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mssql DatabaseSecretsMount#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql"></a>

```typescript
public readonly mysql: IResolvable | DatabaseSecretsMountMysql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql DatabaseSecretsMount#mysql}

---

##### `mysqlAurora`<sup>Optional</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora"></a>

```typescript
public readonly mysqlAurora: IResolvable | DatabaseSecretsMountMysqlAurora[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]

mysql_aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_aurora DatabaseSecretsMount#mysql_aurora}

---

##### `mysqlLegacy`<sup>Optional</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy"></a>

```typescript
public readonly mysqlLegacy: IResolvable | DatabaseSecretsMountMysqlLegacy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]

mysql_legacy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_legacy DatabaseSecretsMount#mysql_legacy}

---

##### `mysqlRds`<sup>Optional</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds"></a>

```typescript
public readonly mysqlRds: IResolvable | DatabaseSecretsMountMysqlRds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]

mysql_rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_rds DatabaseSecretsMount#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#namespace DatabaseSecretsMount#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#options DatabaseSecretsMount#options}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle"></a>

```typescript
public readonly oracle: IResolvable | DatabaseSecretsMountOracle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#oracle DatabaseSecretsMount#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql"></a>

```typescript
public readonly postgresql: IResolvable | DatabaseSecretsMountPostgresql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#postgresql DatabaseSecretsMount#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis"></a>

```typescript
public readonly redis: IResolvable | DatabaseSecretsMountRedis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]

redis block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#redis DatabaseSecretsMount#redis}

---

##### `redisElasticache`<sup>Optional</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache"></a>

```typescript
public readonly redisElasticache: IResolvable | DatabaseSecretsMountRedisElasticache[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]

redis_elasticache block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#redis_elasticache DatabaseSecretsMount#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift"></a>

```typescript
public readonly redshift: IResolvable | DatabaseSecretsMountRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#redshift DatabaseSecretsMount#redshift}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#seal_wrap DatabaseSecretsMount#seal_wrap}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake"></a>

```typescript
public readonly snowflake: IResolvable | DatabaseSecretsMountSnowflake[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#snowflake DatabaseSecretsMount#snowflake}

---

### DatabaseSecretsMountCouchbase <a name="DatabaseSecretsMountCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountCouchbase: databaseSecretsMount.DatabaseSecretsMountCouchbase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts">hosts</a></code> | <code>string[]</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username">username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem">base64Pem</a></code> | <code>string</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName">bucketName</a></code> | <code>string</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `base64Pem`<sup>Optional</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem"></a>

```typescript
public readonly base64Pem: string;
```

- *Type:* string

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#base64_pem DatabaseSecretsMount#base64_pem}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#bucket_name DatabaseSecretsMount#bucket_name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountElasticsearch <a name="DatabaseSecretsMountElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountElasticsearch: databaseSecretsMount.DatabaseSecretsMountElasticsearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password">password</a></code> | <code>string</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url">url</a></code> | <code>string</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username">username</a></code> | <code>string</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert">caCert</a></code> | <code>string</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath">caPath</a></code> | <code>string</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert">clientCert</a></code> | <code>string</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey">clientKey</a></code> | <code>string</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#ca_path DatabaseSecretsMount#ca_path}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#client_cert DatabaseSecretsMount#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#client_key DatabaseSecretsMount#client_key}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure DatabaseSecretsMount#insecure}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_server_name DatabaseSecretsMount#tls_server_name}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountHana <a name="DatabaseSecretsMountHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountHana: databaseSecretsMount.DatabaseSecretsMountHana = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountInfluxdb <a name="DatabaseSecretsMountInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountInfluxdb: databaseSecretsMount.DatabaseSecretsMountInfluxdb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host">host</a></code> | <code>string</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username">username</a></code> | <code>string</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle">pemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson">pemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodb <a name="DatabaseSecretsMountMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMongodb: databaseSecretsMount.DatabaseSecretsMountMongodb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodbatlas <a name="DatabaseSecretsMountMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMongodbatlas: databaseSecretsMount.DatabaseSecretsMountMongodbatlas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey">privateKey</a></code> | <code>string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId">projectId</a></code> | <code>string</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey">publicKey</a></code> | <code>string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#private_key DatabaseSecretsMount#private_key}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#project_id DatabaseSecretsMount#project_id}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#public_key DatabaseSecretsMount#public_key}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMssql <a name="DatabaseSecretsMountMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMssql: databaseSecretsMount.DatabaseSecretsMountMssql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb">containedDb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `containedDb`<sup>Optional</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb"></a>

```typescript
public readonly containedDb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#contained_db DatabaseSecretsMount#contained_db}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysql <a name="DatabaseSecretsMountMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMysql: databaseSecretsMount.DatabaseSecretsMountMysql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa">tlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlAurora <a name="DatabaseSecretsMountMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMysqlAurora: databaseSecretsMount.DatabaseSecretsMountMysqlAurora = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlLegacy <a name="DatabaseSecretsMountMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMysqlLegacy: databaseSecretsMount.DatabaseSecretsMountMysqlLegacy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlRds <a name="DatabaseSecretsMountMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountMysqlRds: databaseSecretsMount.DatabaseSecretsMountMysqlRds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountOracle <a name="DatabaseSecretsMountOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountOracle: databaseSecretsMount.DatabaseSecretsMountOracle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountPostgresql <a name="DatabaseSecretsMountPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountPostgresql: databaseSecretsMount.DatabaseSecretsMountPostgresql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedis <a name="DatabaseSecretsMountRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountRedis: databaseSecretsMount.DatabaseSecretsMountRedis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host">host</a></code> | <code>string</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username">username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert">caCert</a></code> | <code>string</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedisElasticache <a name="DatabaseSecretsMountRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountRedisElasticache: databaseSecretsMount.DatabaseSecretsMountRedisElasticache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url">url</a></code> | <code>string</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password">password</a></code> | <code>string</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region">region</a></code> | <code>string</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username">username</a></code> | <code>string</code> | The AWS access key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#region DatabaseSecretsMount#region}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedshift <a name="DatabaseSecretsMountRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountRedshift: databaseSecretsMount.DatabaseSecretsMountRedshift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountSnowflake <a name="DatabaseSecretsMountSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

const databaseSecretsMountSnowflake: databaseSecretsMount.DatabaseSecretsMountSnowflake = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretsMountCassandraList <a name="DatabaseSecretsMountCassandraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountCassandraList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountCassandraOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountCassandra[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a>[]

---


### DatabaseSecretsMountCassandraOutputReference <a name="DatabaseSecretsMountCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle">resetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson">resetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle"></a>

```typescript
public resetPemBundle(): void
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson"></a>

```typescript
public resetPemJson(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle">pemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson">pemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput"></a>

```typescript
public readonly pemBundleInput: string;
```

- *Type:* string

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput"></a>

```typescript
public readonly pemJsonInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: number;
```

- *Type:* number

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: number;
```

- *Type:* number

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountCassandra | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra">DatabaseSecretsMountCassandra</a> | cdktf.IResolvable

---


### DatabaseSecretsMountCouchbaseList <a name="DatabaseSecretsMountCouchbaseList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountCouchbaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountCouchbaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountCouchbase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a>[]

---


### DatabaseSecretsMountCouchbaseOutputReference <a name="DatabaseSecretsMountCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem">resetBase64Pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetBase64Pem` <a name="resetBase64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem"></a>

```typescript
public resetBase64Pem(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput">base64PemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem">base64Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `base64PemInput`<sup>Optional</sup> <a name="base64PemInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput"></a>

```typescript
public readonly base64PemInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `base64Pem`<sup>Required</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem"></a>

```typescript
public readonly base64Pem: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountCouchbase | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase">DatabaseSecretsMountCouchbase</a> | cdktf.IResolvable

---


### DatabaseSecretsMountElasticsearchList <a name="DatabaseSecretsMountElasticsearchList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountElasticsearchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountElasticsearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a>[]

---


### DatabaseSecretsMountElasticsearchOutputReference <a name="DatabaseSecretsMountElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath">resetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetCaPath` <a name="resetCaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath"></a>

```typescript
public resetCaPath(): void
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName"></a>

```typescript
public resetTlsServerName(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput">caPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath">caPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `caPathInput`<sup>Optional</sup> <a name="caPathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput"></a>

```typescript
public readonly caPathInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput"></a>

```typescript
public readonly tlsServerNameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `caPath`<sup>Required</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tlsServerName`<sup>Required</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountElasticsearch | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch">DatabaseSecretsMountElasticsearch</a> | cdktf.IResolvable

---


### DatabaseSecretsMountHanaList <a name="DatabaseSecretsMountHanaList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountHanaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountHanaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountHana[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a>[]

---


### DatabaseSecretsMountHanaOutputReference <a name="DatabaseSecretsMountHanaOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountHanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountHana | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana">DatabaseSecretsMountHana</a> | cdktf.IResolvable

---


### DatabaseSecretsMountInfluxdbList <a name="DatabaseSecretsMountInfluxdbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountInfluxdbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountInfluxdbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountInfluxdb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a>[]

---


### DatabaseSecretsMountInfluxdbOutputReference <a name="DatabaseSecretsMountInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle">resetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson">resetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle"></a>

```typescript
public resetPemBundle(): void
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson"></a>

```typescript
public resetPemJson(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle">pemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson">pemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput"></a>

```typescript
public readonly pemBundleInput: string;
```

- *Type:* string

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput"></a>

```typescript
public readonly pemJsonInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountInfluxdb | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb">DatabaseSecretsMountInfluxdb</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMongodbatlasList <a name="DatabaseSecretsMountMongodbatlasList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMongodbatlasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMongodbatlasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMongodbatlas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a>[]

---


### DatabaseSecretsMountMongodbatlasOutputReference <a name="DatabaseSecretsMountMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMongodbatlas | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas">DatabaseSecretsMountMongodbatlas</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMongodbList <a name="DatabaseSecretsMountMongodbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMongodbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMongodbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMongodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a>[]

---


### DatabaseSecretsMountMongodbOutputReference <a name="DatabaseSecretsMountMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMongodb | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb">DatabaseSecretsMountMongodb</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMssqlList <a name="DatabaseSecretsMountMssqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMssqlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMssqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMssql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a>[]

---


### DatabaseSecretsMountMssqlOutputReference <a name="DatabaseSecretsMountMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb">resetContainedDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetContainedDb` <a name="resetContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb"></a>

```typescript
public resetContainedDb(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput">containedDbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb">containedDb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `containedDbInput`<sup>Optional</sup> <a name="containedDbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput"></a>

```typescript
public readonly containedDbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `containedDb`<sup>Required</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb"></a>

```typescript
public readonly containedDb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMssql | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql">DatabaseSecretsMountMssql</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMysqlAuroraList <a name="DatabaseSecretsMountMysqlAuroraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMysqlAuroraOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMysqlAurora[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a>[]

---


### DatabaseSecretsMountMysqlAuroraOutputReference <a name="DatabaseSecretsMountMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMysqlAurora | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora">DatabaseSecretsMountMysqlAurora</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMysqlLegacyList <a name="DatabaseSecretsMountMysqlLegacyList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMysqlLegacyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMysqlLegacy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a>[]

---


### DatabaseSecretsMountMysqlLegacyOutputReference <a name="DatabaseSecretsMountMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMysqlLegacy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy">DatabaseSecretsMountMysqlLegacy</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMysqlList <a name="DatabaseSecretsMountMysqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMysqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMysql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a>[]

---


### DatabaseSecretsMountMysqlOutputReference <a name="DatabaseSecretsMountMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa">resetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey">resetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa"></a>

```typescript
public resetTlsCa(): void
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey"></a>

```typescript
public resetTlsCertificateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa">tlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput"></a>

```typescript
public readonly tlsCaInput: string;
```

- *Type:* string

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```typescript
public readonly tlsCertificateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMysql | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql">DatabaseSecretsMountMysql</a> | cdktf.IResolvable

---


### DatabaseSecretsMountMysqlRdsList <a name="DatabaseSecretsMountMysqlRdsList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlRdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountMysqlRdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountMysqlRds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a>[]

---


### DatabaseSecretsMountMysqlRdsOutputReference <a name="DatabaseSecretsMountMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountMysqlRds | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds">DatabaseSecretsMountMysqlRds</a> | cdktf.IResolvable

---


### DatabaseSecretsMountOracleList <a name="DatabaseSecretsMountOracleList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountOracleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountOracleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountOracle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a>[]

---


### DatabaseSecretsMountOracleOutputReference <a name="DatabaseSecretsMountOracleOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountOracleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountOracle | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle">DatabaseSecretsMountOracle</a> | cdktf.IResolvable

---


### DatabaseSecretsMountPostgresqlList <a name="DatabaseSecretsMountPostgresqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountPostgresqlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountPostgresqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountPostgresql[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a>[]

---


### DatabaseSecretsMountPostgresqlOutputReference <a name="DatabaseSecretsMountPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountPostgresql | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql">DatabaseSecretsMountPostgresql</a> | cdktf.IResolvable

---


### DatabaseSecretsMountRedisElasticacheList <a name="DatabaseSecretsMountRedisElasticacheList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountRedisElasticacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountRedisElasticache[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a>[]

---


### DatabaseSecretsMountRedisElasticacheOutputReference <a name="DatabaseSecretsMountRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountRedisElasticache | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache">DatabaseSecretsMountRedisElasticache</a> | cdktf.IResolvable

---


### DatabaseSecretsMountRedisList <a name="DatabaseSecretsMountRedisList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountRedisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountRedis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a>[]

---


### DatabaseSecretsMountRedisOutputReference <a name="DatabaseSecretsMountRedisOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountRedis | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis">DatabaseSecretsMountRedis</a> | cdktf.IResolvable

---


### DatabaseSecretsMountRedshiftList <a name="DatabaseSecretsMountRedshiftList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedshiftList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a>[]

---


### DatabaseSecretsMountRedshiftOutputReference <a name="DatabaseSecretsMountRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountRedshift | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift">DatabaseSecretsMountRedshift</a> | cdktf.IResolvable

---


### DatabaseSecretsMountSnowflakeList <a name="DatabaseSecretsMountSnowflakeList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountSnowflakeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get"></a>

```typescript
public get(index: number): DatabaseSecretsMountSnowflakeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSecretsMountSnowflake[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a>[]

---


### DatabaseSecretsMountSnowflakeOutputReference <a name="DatabaseSecretsMountSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer"></a>

```typescript
import { databaseSecretsMount } from '@cdktf/provider-vault'

new databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretsMountSnowflake | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake">DatabaseSecretsMountSnowflake</a> | cdktf.IResolvable

---


