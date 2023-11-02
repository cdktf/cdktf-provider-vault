# `vault_database_secret_backend_connection`

Refer to the Terraform Registory for docs: [`vault_database_secret_backend_connection`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection).

# `databaseSecretBackendConnection` Submodule <a name="`databaseSecretBackendConnection` Submodule" id="@cdktf/provider-vault.databaseSecretBackendConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendConnection <a name="DatabaseSecretBackendConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnection(scope Construct, id *string, config DatabaseSecretBackendConnectionConfig) DatabaseSecretBackendConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig">DatabaseSecretBackendConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig">DatabaseSecretBackendConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra">PutCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase">PutCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch">PutElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana">PutHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb">PutInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb">PutMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas">PutMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql">PutMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora">PutMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy">PutMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds">PutMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle">PutOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache">PutRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra">ResetCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase">ResetCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch">ResetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana">ResetHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb">ResetInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb">ResetMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas">ResetMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql">ResetMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora">ResetMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy">ResetMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds">ResetMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle">ResetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache">ResetRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake">ResetSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCassandra` <a name="PutCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra"></a>

```go
func PutCassandra(value DatabaseSecretBackendConnectionCassandra)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `PutCouchbase` <a name="PutCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase"></a>

```go
func PutCouchbase(value DatabaseSecretBackendConnectionCouchbase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `PutElasticsearch` <a name="PutElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch"></a>

```go
func PutElasticsearch(value DatabaseSecretBackendConnectionElasticsearch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `PutHana` <a name="PutHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana"></a>

```go
func PutHana(value DatabaseSecretBackendConnectionHana)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `PutInfluxdb` <a name="PutInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb"></a>

```go
func PutInfluxdb(value DatabaseSecretBackendConnectionInfluxdb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `PutMongodb` <a name="PutMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb"></a>

```go
func PutMongodb(value DatabaseSecretBackendConnectionMongodb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `PutMongodbatlas` <a name="PutMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas"></a>

```go
func PutMongodbatlas(value DatabaseSecretBackendConnectionMongodbatlas)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `PutMssql` <a name="PutMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql"></a>

```go
func PutMssql(value DatabaseSecretBackendConnectionMssql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql"></a>

```go
func PutMysql(value DatabaseSecretBackendConnectionMysql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `PutMysqlAurora` <a name="PutMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora"></a>

```go
func PutMysqlAurora(value DatabaseSecretBackendConnectionMysqlAurora)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `PutMysqlLegacy` <a name="PutMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy"></a>

```go
func PutMysqlLegacy(value DatabaseSecretBackendConnectionMysqlLegacy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `PutMysqlRds` <a name="PutMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds"></a>

```go
func PutMysqlRds(value DatabaseSecretBackendConnectionMysqlRds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `PutOracle` <a name="PutOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle"></a>

```go
func PutOracle(value DatabaseSecretBackendConnectionOracle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql"></a>

```go
func PutPostgresql(value DatabaseSecretBackendConnectionPostgresql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `PutRedis` <a name="PutRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis"></a>

```go
func PutRedis(value DatabaseSecretBackendConnectionRedis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `PutRedisElasticache` <a name="PutRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache"></a>

```go
func PutRedisElasticache(value DatabaseSecretBackendConnectionRedisElasticache)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift"></a>

```go
func PutRedshift(value DatabaseSecretBackendConnectionRedshift)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake"></a>

```go
func PutSnowflake(value DatabaseSecretBackendConnectionSnowflake)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetCassandra` <a name="ResetCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra"></a>

```go
func ResetCassandra()
```

##### `ResetCouchbase` <a name="ResetCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase"></a>

```go
func ResetCouchbase()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData"></a>

```go
func ResetData()
```

##### `ResetElasticsearch` <a name="ResetElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch"></a>

```go
func ResetElasticsearch()
```

##### `ResetHana` <a name="ResetHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana"></a>

```go
func ResetHana()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetInfluxdb` <a name="ResetInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb"></a>

```go
func ResetInfluxdb()
```

##### `ResetMongodb` <a name="ResetMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb"></a>

```go
func ResetMongodb()
```

##### `ResetMongodbatlas` <a name="ResetMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas"></a>

```go
func ResetMongodbatlas()
```

##### `ResetMssql` <a name="ResetMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql"></a>

```go
func ResetMssql()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql"></a>

```go
func ResetMysql()
```

##### `ResetMysqlAurora` <a name="ResetMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora"></a>

```go
func ResetMysqlAurora()
```

##### `ResetMysqlLegacy` <a name="ResetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy"></a>

```go
func ResetMysqlLegacy()
```

##### `ResetMysqlRds` <a name="ResetMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds"></a>

```go
func ResetMysqlRds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOracle` <a name="ResetOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle"></a>

```go
func ResetOracle()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql"></a>

```go
func ResetPostgresql()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis"></a>

```go
func ResetRedis()
```

##### `ResetRedisElasticache` <a name="ResetRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache"></a>

```go
func ResetRedisElasticache()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift"></a>

```go
func ResetRedshift()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake"></a>

```go
func ResetSnowflake()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.DatabaseSecretBackendConnection_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.DatabaseSecretBackendConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.DatabaseSecretBackendConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.DatabaseSecretBackendConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseSecretBackendConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseSecretBackendConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra">Cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase">Couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch">Elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana">Hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb">Influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb">Mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas">Mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql">Mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora">MysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy">MysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds">MysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache">RedisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput">CassandraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput">CouchbaseInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput">ElasticsearchInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput">HanaInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput">InfluxdbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput">MongodbatlasInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput">MongodbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput">MssqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput">MysqlAuroraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput">MysqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput">MysqlLegacyInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput">MysqlRdsInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput">OracleInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput">PostgresqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput">RedisElasticacheInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput">RedisInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput">RedshiftInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput">SnowflakeInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cassandra`<sup>Required</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra"></a>

```go
func Cassandra() DatabaseSecretBackendConnectionCassandraOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a>

---

##### `Couchbase`<sup>Required</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase"></a>

```go
func Couchbase() DatabaseSecretBackendConnectionCouchbaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a>

---

##### `Elasticsearch`<sup>Required</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch"></a>

```go
func Elasticsearch() DatabaseSecretBackendConnectionElasticsearchOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a>

---

##### `Hana`<sup>Required</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana"></a>

```go
func Hana() DatabaseSecretBackendConnectionHanaOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a>

---

##### `Influxdb`<sup>Required</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb"></a>

```go
func Influxdb() DatabaseSecretBackendConnectionInfluxdbOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a>

---

##### `Mongodb`<sup>Required</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb"></a>

```go
func Mongodb() DatabaseSecretBackendConnectionMongodbOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a>

---

##### `Mongodbatlas`<sup>Required</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas"></a>

```go
func Mongodbatlas() DatabaseSecretBackendConnectionMongodbatlasOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a>

---

##### `Mssql`<sup>Required</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql"></a>

```go
func Mssql() DatabaseSecretBackendConnectionMssqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql"></a>

```go
func Mysql() DatabaseSecretBackendConnectionMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a>

---

##### `MysqlAurora`<sup>Required</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora"></a>

```go
func MysqlAurora() DatabaseSecretBackendConnectionMysqlAuroraOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a>

---

##### `MysqlLegacy`<sup>Required</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy"></a>

```go
func MysqlLegacy() DatabaseSecretBackendConnectionMysqlLegacyOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a>

---

##### `MysqlRds`<sup>Required</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds"></a>

```go
func MysqlRds() DatabaseSecretBackendConnectionMysqlRdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a>

---

##### `Oracle`<sup>Required</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle"></a>

```go
func Oracle() DatabaseSecretBackendConnectionOracleOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql"></a>

```go
func Postgresql() DatabaseSecretBackendConnectionPostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis"></a>

```go
func Redis() DatabaseSecretBackendConnectionRedisOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a>

---

##### `RedisElasticache`<sup>Required</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache"></a>

```go
func RedisElasticache() DatabaseSecretBackendConnectionRedisElasticacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift"></a>

```go
func Redshift() DatabaseSecretBackendConnectionRedshiftOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake"></a>

```go
func Snowflake() DatabaseSecretBackendConnectionSnowflakeOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a>

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CassandraInput`<sup>Optional</sup> <a name="CassandraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput"></a>

```go
func CassandraInput() DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `CouchbaseInput`<sup>Optional</sup> <a name="CouchbaseInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput"></a>

```go
func CouchbaseInput() DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ElasticsearchInput`<sup>Optional</sup> <a name="ElasticsearchInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput"></a>

```go
func ElasticsearchInput() DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `HanaInput`<sup>Optional</sup> <a name="HanaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput"></a>

```go
func HanaInput() DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfluxdbInput`<sup>Optional</sup> <a name="InfluxdbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput"></a>

```go
func InfluxdbInput() DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `MongodbatlasInput`<sup>Optional</sup> <a name="MongodbatlasInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput"></a>

```go
func MongodbatlasInput() DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `MongodbInput`<sup>Optional</sup> <a name="MongodbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput"></a>

```go
func MongodbInput() DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `MssqlInput`<sup>Optional</sup> <a name="MssqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput"></a>

```go
func MssqlInput() DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `MysqlAuroraInput`<sup>Optional</sup> <a name="MysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput"></a>

```go
func MysqlAuroraInput() DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput"></a>

```go
func MysqlInput() DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `MysqlLegacyInput`<sup>Optional</sup> <a name="MysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput"></a>

```go
func MysqlLegacyInput() DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `MysqlRdsInput`<sup>Optional</sup> <a name="MysqlRdsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput"></a>

```go
func MysqlRdsInput() DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OracleInput`<sup>Optional</sup> <a name="OracleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput"></a>

```go
func OracleInput() DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput"></a>

```go
func PostgresqlInput() DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `RedisElasticacheInput`<sup>Optional</sup> <a name="RedisElasticacheInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput"></a>

```go
func RedisElasticacheInput() DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput"></a>

```go
func RedisInput() DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput"></a>

```go
func RedshiftInput() DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput"></a>

```go
func SnowflakeInput() DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendConnectionCassandra <a name="DatabaseSecretBackendConnectionCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionCassandra {
	ConnectTimeout: *f64,
	Hosts: *[]*string,
	InsecureTls: interface{},
	Password: *string,
	PemBundle: *string,
	PemJson: *string,
	Port: *f64,
	ProtocolVersion: *f64,
	Tls: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts">Hosts</a></code> | <code>*[]*string</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password">Password</a></code> | <code>*string</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle">PemBundle</a></code> | <code>*string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson">PemJson</a></code> | <code>*string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion">ProtocolVersion</a></code> | <code>*f64</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls">Tls</a></code> | <code>interface{}</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username">Username</a></code> | <code>*string</code> | The username to use when authenticating with Cassandra. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle"></a>

```go
PemBundle *string
```

- *Type:* *string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson"></a>

```go
PemJson *string
```

- *Type:* *string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion"></a>

```go
ProtocolVersion *f64
```

- *Type:* *f64

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionConfig <a name="DatabaseSecretBackendConnectionConfig" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Name: *string,
	AllowedRoles: *[]*string,
	Cassandra: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra,
	Couchbase: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase,
	Data: *map[string]*string,
	Elasticsearch: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch,
	Hana: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana,
	Id: *string,
	Influxdb: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb,
	Mongodb: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb,
	Mongodbatlas: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas,
	Mssql: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql,
	Mysql: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql,
	MysqlAurora: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora,
	MysqlLegacy: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy,
	MysqlRds: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds,
	Namespace: *string,
	Oracle: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle,
	PluginName: *string,
	Postgresql: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql,
	Redis: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis,
	RedisElasticache: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache,
	Redshift: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift,
	RootRotationStatements: *[]*string,
	Snowflake: github.com/cdktf/cdktf-provider-vault-go/vault/v11.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra">Cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase">Couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch">Elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana">Hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb">Influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb">Mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas">Mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql">Mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora">MysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy">MysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds">MysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache">RedisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `Cassandra`<sup>Optional</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra"></a>

```go
Cassandra DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `Couchbase`<sup>Optional</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase"></a>

```go
Couchbase DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `Elasticsearch`<sup>Optional</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch"></a>

```go
Elasticsearch DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `Hana`<sup>Optional</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana"></a>

```go
Hana DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Influxdb`<sup>Optional</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb"></a>

```go
Influxdb DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `Mongodb`<sup>Optional</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb"></a>

```go
Mongodb DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `Mongodbatlas`<sup>Optional</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas"></a>

```go
Mongodbatlas DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `Mssql`<sup>Optional</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql"></a>

```go
Mssql DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql"></a>

```go
Mysql DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `MysqlAurora`<sup>Optional</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora"></a>

```go
MysqlAurora DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `MysqlLegacy`<sup>Optional</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy"></a>

```go
MysqlLegacy DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `MysqlRds`<sup>Optional</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds"></a>

```go
MysqlRds DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `Oracle`<sup>Optional</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle"></a>

```go
Oracle DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql"></a>

```go
Postgresql DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis"></a>

```go
Redis DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `RedisElasticache`<sup>Optional</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache"></a>

```go
RedisElasticache DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift"></a>

```go
Redshift DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake"></a>

```go
Snowflake DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

### DatabaseSecretBackendConnectionCouchbase <a name="DatabaseSecretBackendConnectionCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionCouchbase {
	Hosts: *[]*string,
	Password: *string,
	Username: *string,
	Base64Pem: *string,
	BucketName: *string,
	InsecureTls: interface{},
	Tls: interface{},
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts">Hosts</a></code> | <code>*[]*string</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username">Username</a></code> | <code>*string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem">Base64Pem</a></code> | <code>*string</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName">BucketName</a></code> | <code>*string</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls">Tls</a></code> | <code>interface{}</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `Base64Pem`<sup>Optional</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem"></a>

```go
Base64Pem *string
```

- *Type:* *string

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionElasticsearch <a name="DatabaseSecretBackendConnectionElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionElasticsearch {
	Password: *string,
	Url: *string,
	Username: *string,
	CaCert: *string,
	CaPath: *string,
	ClientCert: *string,
	ClientKey: *string,
	Insecure: interface{},
	TlsServerName: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password">Password</a></code> | <code>*string</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url">Url</a></code> | <code>*string</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username">Username</a></code> | <code>*string</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert">CaCert</a></code> | <code>*string</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath">CaPath</a></code> | <code>*string</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert">ClientCert</a></code> | <code>*string</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey">ClientKey</a></code> | <code>*string</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure">Insecure</a></code> | <code>interface{}</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath"></a>

```go
CaPath *string
```

- *Type:* *string

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert"></a>

```go
ClientCert *string
```

- *Type:* *string

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName"></a>

```go
TlsServerName *string
```

- *Type:* *string

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionHana <a name="DatabaseSecretBackendConnectionHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionHana {
	ConnectionUrl: *string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionInfluxdb <a name="DatabaseSecretBackendConnectionInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionInfluxdb {
	Host: *string,
	Password: *string,
	Username: *string,
	ConnectTimeout: *f64,
	InsecureTls: interface{},
	PemBundle: *string,
	PemJson: *string,
	Port: *f64,
	Tls: interface{},
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host">Host</a></code> | <code>*string</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username">Username</a></code> | <code>*string</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle">PemBundle</a></code> | <code>*string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson">PemJson</a></code> | <code>*string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls">Tls</a></code> | <code>interface{}</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host"></a>

```go
Host *string
```

- *Type:* *string

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle"></a>

```go
PemBundle *string
```

- *Type:* *string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson"></a>

```go
PemJson *string
```

- *Type:* *string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodb <a name="DatabaseSecretBackendConnectionMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMongodb {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodbatlas <a name="DatabaseSecretBackendConnectionMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMongodbatlas {
	PrivateKey: *string,
	ProjectId: *string,
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId">ProjectId</a></code> | <code>*string</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey">PublicKey</a></code> | <code>*string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}

---

### DatabaseSecretBackendConnectionMssql <a name="DatabaseSecretBackendConnectionMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMssql {
	ConnectionUrl: *string,
	ContainedDb: interface{},
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb">ContainedDb</a></code> | <code>interface{}</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `ContainedDb`<sup>Optional</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb"></a>

```go
ContainedDb interface{}
```

- *Type:* interface{}

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysql <a name="DatabaseSecretBackendConnectionMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMysql {
	AuthType: *string,
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	ServiceAccountJson: *string,
	TlsCa: *string,
	TlsCertificateKey: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa">TlsCa</a></code> | <code>*string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa"></a>

```go
TlsCa *string
```

- *Type:* *string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey"></a>

```go
TlsCertificateKey *string
```

- *Type:* *string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlAurora <a name="DatabaseSecretBackendConnectionMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMysqlAurora {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlLegacy <a name="DatabaseSecretBackendConnectionMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMysqlLegacy {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlRds <a name="DatabaseSecretBackendConnectionMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionMysqlRds {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionOracle <a name="DatabaseSecretBackendConnectionOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionOracle {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionPostgresql <a name="DatabaseSecretBackendConnectionPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionPostgresql {
	AuthType: *string,
	ConnectionUrl: *string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	ServiceAccountJson: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionRedis <a name="DatabaseSecretBackendConnectionRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionRedis {
	Host: *string,
	Password: *string,
	Username: *string,
	CaCert: *string,
	InsecureTls: interface{},
	Port: *f64,
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host">Host</a></code> | <code>*string</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username">Username</a></code> | <code>*string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert">CaCert</a></code> | <code>*string</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls">Tls</a></code> | <code>interface{}</code> | Specifies whether to use TLS when connecting to Redis. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host"></a>

```go
Host *string
```

- *Type:* *string

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

### DatabaseSecretBackendConnectionRedisElasticache <a name="DatabaseSecretBackendConnectionRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionRedisElasticache {
	Url: *string,
	Password: *string,
	Region: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url">Url</a></code> | <code>*string</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password">Password</a></code> | <code>*string</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region">Region</a></code> | <code>*string</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username">Username</a></code> | <code>*string</code> | The AWS access key id to use to talk to ElastiCache. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url"></a>

```go
Url *string
```

- *Type:* *string

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password"></a>

```go
Password *string
```

- *Type:* *string

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username"></a>

```go
Username *string
```

- *Type:* *string

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionRedshift <a name="DatabaseSecretBackendConnectionRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionRedshift {
	ConnectionUrl: *string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionSnowflake <a name="DatabaseSecretBackendConnectionSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

&databasesecretbackendconnection.DatabaseSecretBackendConnectionSnowflake {
	ConnectionUrl: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	Username: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretBackendConnectionCassandraOutputReference <a name="DatabaseSecretBackendConnectionCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionCassandraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionCassandraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle"></a>

```go
func ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson"></a>

```go
func ResetPemJson()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion"></a>

```go
func ResetProtocolVersion()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle">PemBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson">PemJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput"></a>

```go
func PemBundleInput() *string
```

- *Type:* *string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput"></a>

```go
func PemJsonInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *f64
```

- *Type:* *f64

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle"></a>

```go
func PemBundle() *string
```

- *Type:* *string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson"></a>

```go
func PemJson() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion"></a>

```go
func ProtocolVersion() *f64
```

- *Type:* *f64

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---


### DatabaseSecretBackendConnectionCouchbaseOutputReference <a name="DatabaseSecretBackendConnectionCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionCouchbaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionCouchbaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem">ResetBase64Pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase64Pem` <a name="ResetBase64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem"></a>

```go
func ResetBase64Pem()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput">Base64PemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem">Base64Pem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Base64PemInput`<sup>Optional</sup> <a name="Base64PemInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput"></a>

```go
func Base64PemInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `Base64Pem`<sup>Required</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem"></a>

```go
func Base64Pem() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---


### DatabaseSecretBackendConnectionElasticsearchOutputReference <a name="DatabaseSecretBackendConnectionElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionElasticsearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionElasticsearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath">ResetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert"></a>

```go
func ResetCaCert()
```

##### `ResetCaPath` <a name="ResetCaPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath"></a>

```go
func ResetCaPath()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert"></a>

```go
func ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName"></a>

```go
func ResetTlsServerName()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput">CaPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput">ClientCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath">CaPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert">ClientCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `CaPathInput`<sup>Optional</sup> <a name="CaPathInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput"></a>

```go
func CaPathInput() *string
```

- *Type:* *string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput"></a>

```go
func ClientCertInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput"></a>

```go
func TlsServerNameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `CaPath`<sup>Required</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath"></a>

```go
func CaPath() *string
```

- *Type:* *string

---

##### `ClientCert`<sup>Required</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert"></a>

```go
func ClientCert() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `TlsServerName`<sup>Required</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName"></a>

```go
func TlsServerName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---


### DatabaseSecretBackendConnectionHanaOutputReference <a name="DatabaseSecretBackendConnectionHanaOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionHanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionHanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---


### DatabaseSecretBackendConnectionInfluxdbOutputReference <a name="DatabaseSecretBackendConnectionInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionInfluxdbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionInfluxdbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle"></a>

```go
func ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson"></a>

```go
func ResetPemJson()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle">PemBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson">PemJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput"></a>

```go
func PemBundleInput() *string
```

- *Type:* *string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput"></a>

```go
func PemJsonInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle"></a>

```go
func PemBundle() *string
```

- *Type:* *string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson"></a>

```go
func PemJson() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---


### DatabaseSecretBackendConnectionMongodbatlasOutputReference <a name="DatabaseSecretBackendConnectionMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMongodbatlasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMongodbatlasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---


### DatabaseSecretBackendConnectionMongodbOutputReference <a name="DatabaseSecretBackendConnectionMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMongodbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMongodbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---


### DatabaseSecretBackendConnectionMssqlOutputReference <a name="DatabaseSecretBackendConnectionMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMssqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMssqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb">ResetContainedDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetContainedDb` <a name="ResetContainedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb"></a>

```go
func ResetContainedDb()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput">ContainedDbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb">ContainedDb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `ContainedDbInput`<sup>Optional</sup> <a name="ContainedDbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput"></a>

```go
func ContainedDbInput() interface{}
```

- *Type:* interface{}

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `ContainedDb`<sup>Required</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb"></a>

```go
func ContainedDb() interface{}
```

- *Type:* interface{}

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---


### DatabaseSecretBackendConnectionMysqlAuroraOutputReference <a name="DatabaseSecretBackendConnectionMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMysqlAuroraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMysqlAuroraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---


### DatabaseSecretBackendConnectionMysqlLegacyOutputReference <a name="DatabaseSecretBackendConnectionMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMysqlLegacyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMysqlLegacyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---


### DatabaseSecretBackendConnectionMysqlOutputReference <a name="DatabaseSecretBackendConnectionMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMysqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMysqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa"></a>

```go
func ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey"></a>

```go
func ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa">TlsCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput"></a>

```go
func TlsCaInput() *string
```

- *Type:* *string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```go
func TlsCertificateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa"></a>

```go
func TlsCa() *string
```

- *Type:* *string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey"></a>

```go
func TlsCertificateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---


### DatabaseSecretBackendConnectionMysqlRdsOutputReference <a name="DatabaseSecretBackendConnectionMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionMysqlRdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionMysqlRdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---


### DatabaseSecretBackendConnectionOracleOutputReference <a name="DatabaseSecretBackendConnectionOracleOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionOracleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionOracleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---


### DatabaseSecretBackendConnectionPostgresqlOutputReference <a name="DatabaseSecretBackendConnectionPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionPostgresqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionPostgresqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---


### DatabaseSecretBackendConnectionRedisElasticacheOutputReference <a name="DatabaseSecretBackendConnectionRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionRedisElasticacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionRedisElasticacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---


### DatabaseSecretBackendConnectionRedisOutputReference <a name="DatabaseSecretBackendConnectionRedisOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionRedisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionRedisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert"></a>

```go
func ResetCaCert()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---


### DatabaseSecretBackendConnectionRedshiftOutputReference <a name="DatabaseSecretBackendConnectionRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionRedshiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionRedshiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---


### DatabaseSecretBackendConnectionSnowflakeOutputReference <a name="DatabaseSecretBackendConnectionSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/databasesecretbackendconnection"

databasesecretbackendconnection.NewDatabaseSecretBackendConnectionSnowflakeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseSecretBackendConnectionSnowflakeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---



