# `databaseSecretsMount` Submodule <a name="`databaseSecretsMount` Submodule" id="@cdktf/provider-vault.databaseSecretsMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretsMount <a name="DatabaseSecretsMount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount vault_database_secrets_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMount(scope Construct, id *string, config DatabaseSecretsMountConfig) DatabaseSecretsMount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra">PutCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase">PutCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch">PutElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana">PutHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb">PutInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb">PutMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas">PutMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql">PutMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora">PutMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy">PutMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds">PutMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle">PutOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache">PutRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra">ResetCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase">ResetCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch">ResetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana">ResetHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb">ResetInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb">ResetMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas">ResetMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql">ResetMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora">ResetMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy">ResetMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds">ResetMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle">ResetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache">ResetRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake">ResetSnowflake</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCassandra` <a name="PutCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra"></a>

```go
func PutCassandra(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCouchbase` <a name="PutCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase"></a>

```go
func PutCouchbase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase.parameter.value"></a>

- *Type:* interface{}

---

##### `PutElasticsearch` <a name="PutElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch"></a>

```go
func PutElasticsearch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHana` <a name="PutHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana"></a>

```go
func PutHana(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInfluxdb` <a name="PutInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb"></a>

```go
func PutInfluxdb(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMongodb` <a name="PutMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb"></a>

```go
func PutMongodb(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMongodbatlas` <a name="PutMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas"></a>

```go
func PutMongodbatlas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMssql` <a name="PutMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql"></a>

```go
func PutMssql(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql"></a>

```go
func PutMysql(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMysqlAurora` <a name="PutMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora"></a>

```go
func PutMysqlAurora(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMysqlLegacy` <a name="PutMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy"></a>

```go
func PutMysqlLegacy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMysqlRds` <a name="PutMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds"></a>

```go
func PutMysqlRds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOracle` <a name="PutOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle"></a>

```go
func PutOracle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql"></a>

```go
func PutPostgresql(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedis` <a name="PutRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis"></a>

```go
func PutRedis(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedisElasticache` <a name="PutRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache"></a>

```go
func PutRedisElasticache(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift"></a>

```go
func PutRedshift(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake"></a>

```go
func PutSnowflake(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys"></a>

```go
func ResetAllowedManagedKeys()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetCassandra` <a name="ResetCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra"></a>

```go
func ResetCassandra()
```

##### `ResetCouchbase` <a name="ResetCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase"></a>

```go
func ResetCouchbase()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetElasticsearch` <a name="ResetElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch"></a>

```go
func ResetElasticsearch()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess"></a>

```go
func ResetExternalEntropyAccess()
```

##### `ResetHana` <a name="ResetHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana"></a>

```go
func ResetHana()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId"></a>

```go
func ResetId()
```

##### `ResetInfluxdb` <a name="ResetInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb"></a>

```go
func ResetInfluxdb()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetMongodb` <a name="ResetMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb"></a>

```go
func ResetMongodb()
```

##### `ResetMongodbatlas` <a name="ResetMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas"></a>

```go
func ResetMongodbatlas()
```

##### `ResetMssql` <a name="ResetMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql"></a>

```go
func ResetMssql()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql"></a>

```go
func ResetMysql()
```

##### `ResetMysqlAurora` <a name="ResetMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora"></a>

```go
func ResetMysqlAurora()
```

##### `ResetMysqlLegacy` <a name="ResetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy"></a>

```go
func ResetMysqlLegacy()
```

##### `ResetMysqlRds` <a name="ResetMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds"></a>

```go
func ResetMysqlRds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetOracle` <a name="ResetOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle"></a>

```go
func ResetOracle()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql"></a>

```go
func ResetPostgresql()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis"></a>

```go
func ResetRedis()
```

##### `ResetRedisElasticache` <a name="ResetRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache"></a>

```go
func ResetRedisElasticache()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift"></a>

```go
func ResetRedshift()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap"></a>

```go
func ResetSealWrap()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake"></a>

```go
func ResetSnowflake()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretsMount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.DatabaseSecretsMount_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.DatabaseSecretsMount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.DatabaseSecretsMount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.DatabaseSecretsMount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseSecretsMount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseSecretsMount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseSecretsMount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretsMount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra">Cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase">Couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch">Elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount">EngineCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana">Hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb">Influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb">Mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas">Mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql">Mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora">MysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy">MysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds">MysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache">RedisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput">CassandraInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput">CouchbaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput">ElasticsearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput">HanaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput">InfluxdbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput">MongodbatlasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput">MongodbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput">MssqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput">MysqlAuroraInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput">MysqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput">MysqlLegacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput">MysqlRdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput">OracleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput">PostgresqlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput">RedisElasticacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput">RedisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput">RedshiftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput">SealWrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput">SnowflakeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `Cassandra`<sup>Required</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra"></a>

```go
func Cassandra() DatabaseSecretsMountCassandraList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a>

---

##### `Couchbase`<sup>Required</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase"></a>

```go
func Couchbase() DatabaseSecretsMountCouchbaseList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a>

---

##### `Elasticsearch`<sup>Required</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch"></a>

```go
func Elasticsearch() DatabaseSecretsMountElasticsearchList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a>

---

##### `EngineCount`<sup>Required</sup> <a name="EngineCount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount"></a>

```go
func EngineCount() *f64
```

- *Type:* *f64

---

##### `Hana`<sup>Required</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana"></a>

```go
func Hana() DatabaseSecretsMountHanaList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a>

---

##### `Influxdb`<sup>Required</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb"></a>

```go
func Influxdb() DatabaseSecretsMountInfluxdbList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a>

---

##### `Mongodb`<sup>Required</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb"></a>

```go
func Mongodb() DatabaseSecretsMountMongodbList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a>

---

##### `Mongodbatlas`<sup>Required</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas"></a>

```go
func Mongodbatlas() DatabaseSecretsMountMongodbatlasList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a>

---

##### `Mssql`<sup>Required</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql"></a>

```go
func Mssql() DatabaseSecretsMountMssqlList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql"></a>

```go
func Mysql() DatabaseSecretsMountMysqlList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a>

---

##### `MysqlAurora`<sup>Required</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora"></a>

```go
func MysqlAurora() DatabaseSecretsMountMysqlAuroraList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a>

---

##### `MysqlLegacy`<sup>Required</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy"></a>

```go
func MysqlLegacy() DatabaseSecretsMountMysqlLegacyList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a>

---

##### `MysqlRds`<sup>Required</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds"></a>

```go
func MysqlRds() DatabaseSecretsMountMysqlRdsList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a>

---

##### `Oracle`<sup>Required</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle"></a>

```go
func Oracle() DatabaseSecretsMountOracleList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql"></a>

```go
func Postgresql() DatabaseSecretsMountPostgresqlList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis"></a>

```go
func Redis() DatabaseSecretsMountRedisList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a>

---

##### `RedisElasticache`<sup>Required</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache"></a>

```go
func RedisElasticache() DatabaseSecretsMountRedisElasticacheList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift"></a>

```go
func Redshift() DatabaseSecretsMountRedshiftList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake"></a>

```go
func Snowflake() DatabaseSecretsMountSnowflakeList
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a>

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput"></a>

```go
func AllowedManagedKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `CassandraInput`<sup>Optional</sup> <a name="CassandraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput"></a>

```go
func CassandraInput() interface{}
```

- *Type:* interface{}

---

##### `CouchbaseInput`<sup>Optional</sup> <a name="CouchbaseInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput"></a>

```go
func CouchbaseInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ElasticsearchInput`<sup>Optional</sup> <a name="ElasticsearchInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput"></a>

```go
func ElasticsearchInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput"></a>

```go
func ExternalEntropyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `HanaInput`<sup>Optional</sup> <a name="HanaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput"></a>

```go
func HanaInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfluxdbInput`<sup>Optional</sup> <a name="InfluxdbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput"></a>

```go
func InfluxdbInput() interface{}
```

- *Type:* interface{}

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `MongodbatlasInput`<sup>Optional</sup> <a name="MongodbatlasInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput"></a>

```go
func MongodbatlasInput() interface{}
```

- *Type:* interface{}

---

##### `MongodbInput`<sup>Optional</sup> <a name="MongodbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput"></a>

```go
func MongodbInput() interface{}
```

- *Type:* interface{}

---

##### `MssqlInput`<sup>Optional</sup> <a name="MssqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput"></a>

```go
func MssqlInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlAuroraInput`<sup>Optional</sup> <a name="MysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput"></a>

```go
func MysqlAuroraInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput"></a>

```go
func MysqlInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlLegacyInput`<sup>Optional</sup> <a name="MysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput"></a>

```go
func MysqlLegacyInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlRdsInput`<sup>Optional</sup> <a name="MysqlRdsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput"></a>

```go
func MysqlRdsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OracleInput`<sup>Optional</sup> <a name="OracleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput"></a>

```go
func OracleInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput"></a>

```go
func PostgresqlInput() interface{}
```

- *Type:* interface{}

---

##### `RedisElasticacheInput`<sup>Optional</sup> <a name="RedisElasticacheInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput"></a>

```go
func RedisElasticacheInput() interface{}
```

- *Type:* interface{}

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput"></a>

```go
func RedisInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput"></a>

```go
func RedshiftInput() interface{}
```

- *Type:* interface{}

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput"></a>

```go
func SealWrapInput() interface{}
```

- *Type:* interface{}

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput"></a>

```go
func SnowflakeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys"></a>

```go
func AllowedManagedKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess"></a>

```go
func ExternalEntropyAccess() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap"></a>

```go
func SealWrap() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretsMountCassandra <a name="DatabaseSecretsMountCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountCassandra {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectTimeout: *f64,
	Data: *map[string]*string,
	Hosts: *[]*string,
	InsecureTls: interface{},
	Password: *string,
	PemBundle: *string,
	PemJson: *string,
	PluginName: *string,
	Port: *f64,
	ProtocolVersion: *f64,
	RootRotationStatements: *[]*string,
	Tls: interface{},
	Username: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts">Hosts</a></code> | <code>*[]*string</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password">Password</a></code> | <code>*string</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle">PemBundle</a></code> | <code>*string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson">PemJson</a></code> | <code>*string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion">ProtocolVersion</a></code> | <code>*f64</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls">Tls</a></code> | <code>interface{}</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username">Username</a></code> | <code>*string</code> | The username to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle"></a>

```go
PemBundle *string
```

- *Type:* *string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson"></a>

```go
PemJson *string
```

- *Type:* *string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion"></a>

```go
ProtocolVersion *f64
```

- *Type:* *f64

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#protocol_version DatabaseSecretsMount#protocol_version}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountConfig <a name="DatabaseSecretsMountConfig" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	AllowedManagedKeys: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	Cassandra: interface{},
	Couchbase: interface{},
	DefaultLeaseTtlSeconds: *f64,
	Description: *string,
	Elasticsearch: interface{},
	ExternalEntropyAccess: interface{},
	Hana: interface{},
	Id: *string,
	Influxdb: interface{},
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Mongodb: interface{},
	Mongodbatlas: interface{},
	Mssql: interface{},
	Mysql: interface{},
	MysqlAurora: interface{},
	MysqlLegacy: interface{},
	MysqlRds: interface{},
	Namespace: *string,
	Options: *map[string]*string,
	Oracle: interface{},
	Postgresql: interface{},
	Redis: interface{},
	RedisElasticache: interface{},
	Redshift: interface{},
	SealWrap: interface{},
	Snowflake: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path">Path</a></code> | <code>*string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra">Cassandra</a></code> | <code>interface{}</code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase">Couchbase</a></code> | <code>interface{}</code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch">Elasticsearch</a></code> | <code>interface{}</code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana">Hana</a></code> | <code>interface{}</code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#id DatabaseSecretsMount#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb">Influxdb</a></code> | <code>interface{}</code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local">Local</a></code> | <code>interface{}</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb">Mongodb</a></code> | <code>interface{}</code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas">Mongodbatlas</a></code> | <code>interface{}</code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql">Mssql</a></code> | <code>interface{}</code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql">Mysql</a></code> | <code>interface{}</code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora">MysqlAurora</a></code> | <code>interface{}</code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy">MysqlLegacy</a></code> | <code>interface{}</code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds">MysqlRds</a></code> | <code>interface{}</code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle">Oracle</a></code> | <code>interface{}</code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql">Postgresql</a></code> | <code>interface{}</code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis">Redis</a></code> | <code>interface{}</code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache">RedisElasticache</a></code> | <code>interface{}</code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift">Redshift</a></code> | <code>interface{}</code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake">Snowflake</a></code> | <code>interface{}</code> | snowflake block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#path DatabaseSecretsMount#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys"></a>

```go
AllowedManagedKeys *[]*string
```

- *Type:* *[]*string

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_managed_keys DatabaseSecretsMount#allowed_managed_keys}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#audit_non_hmac_request_keys DatabaseSecretsMount#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#audit_non_hmac_response_keys DatabaseSecretsMount#audit_non_hmac_response_keys}

---

##### `Cassandra`<sup>Optional</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra"></a>

```go
Cassandra interface{}
```

- *Type:* interface{}

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#cassandra DatabaseSecretsMount#cassandra}

---

##### `Couchbase`<sup>Optional</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase"></a>

```go
Couchbase interface{}
```

- *Type:* interface{}

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#couchbase DatabaseSecretsMount#couchbase}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#default_lease_ttl_seconds DatabaseSecretsMount#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#description DatabaseSecretsMount#description}

---

##### `Elasticsearch`<sup>Optional</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch"></a>

```go
Elasticsearch interface{}
```

- *Type:* interface{}

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#elasticsearch DatabaseSecretsMount#elasticsearch}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess"></a>

```go
ExternalEntropyAccess interface{}
```

- *Type:* interface{}

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#external_entropy_access DatabaseSecretsMount#external_entropy_access}

---

##### `Hana`<sup>Optional</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana"></a>

```go
Hana interface{}
```

- *Type:* interface{}

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#hana DatabaseSecretsMount#hana}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#id DatabaseSecretsMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Influxdb`<sup>Optional</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb"></a>

```go
Influxdb interface{}
```

- *Type:* interface{}

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#influxdb DatabaseSecretsMount#influxdb}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#local DatabaseSecretsMount#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_lease_ttl_seconds DatabaseSecretsMount#max_lease_ttl_seconds}

---

##### `Mongodb`<sup>Optional</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb"></a>

```go
Mongodb interface{}
```

- *Type:* interface{}

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mongodb DatabaseSecretsMount#mongodb}

---

##### `Mongodbatlas`<sup>Optional</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas"></a>

```go
Mongodbatlas interface{}
```

- *Type:* interface{}

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mongodbatlas DatabaseSecretsMount#mongodbatlas}

---

##### `Mssql`<sup>Optional</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql"></a>

```go
Mssql interface{}
```

- *Type:* interface{}

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mssql DatabaseSecretsMount#mssql}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql"></a>

```go
Mysql interface{}
```

- *Type:* interface{}

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mysql DatabaseSecretsMount#mysql}

---

##### `MysqlAurora`<sup>Optional</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora"></a>

```go
MysqlAurora interface{}
```

- *Type:* interface{}

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mysql_aurora DatabaseSecretsMount#mysql_aurora}

---

##### `MysqlLegacy`<sup>Optional</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy"></a>

```go
MysqlLegacy interface{}
```

- *Type:* interface{}

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mysql_legacy DatabaseSecretsMount#mysql_legacy}

---

##### `MysqlRds`<sup>Optional</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds"></a>

```go
MysqlRds interface{}
```

- *Type:* interface{}

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#mysql_rds DatabaseSecretsMount#mysql_rds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#namespace DatabaseSecretsMount#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#options DatabaseSecretsMount#options}

---

##### `Oracle`<sup>Optional</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle"></a>

```go
Oracle interface{}
```

- *Type:* interface{}

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#oracle DatabaseSecretsMount#oracle}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql"></a>

```go
Postgresql interface{}
```

- *Type:* interface{}

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#postgresql DatabaseSecretsMount#postgresql}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis"></a>

```go
Redis interface{}
```

- *Type:* interface{}

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#redis DatabaseSecretsMount#redis}

---

##### `RedisElasticache`<sup>Optional</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache"></a>

```go
RedisElasticache interface{}
```

- *Type:* interface{}

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#redis_elasticache DatabaseSecretsMount#redis_elasticache}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift"></a>

```go
Redshift interface{}
```

- *Type:* interface{}

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#redshift DatabaseSecretsMount#redshift}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap"></a>

```go
SealWrap interface{}
```

- *Type:* interface{}

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#seal_wrap DatabaseSecretsMount#seal_wrap}

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake"></a>

```go
Snowflake interface{}
```

- *Type:* interface{}

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#snowflake DatabaseSecretsMount#snowflake}

---

### DatabaseSecretsMountCouchbase <a name="DatabaseSecretsMountCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountCouchbase {
	Hosts: *[]*string,
	Name: *string,
	Password: *string,
	Username: *string,
	AllowedRoles: *[]*string,
	Base64Pem: *string,
	BucketName: *string,
	Data: *map[string]*string,
	InsecureTls: interface{},
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Tls: interface{},
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts">Hosts</a></code> | <code>*[]*string</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username">Username</a></code> | <code>*string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem">Base64Pem</a></code> | <code>*string</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName">BucketName</a></code> | <code>*string</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls">Tls</a></code> | <code>interface{}</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Base64Pem`<sup>Optional</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem"></a>

```go
Base64Pem *string
```

- *Type:* *string

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#base64_pem DatabaseSecretsMount#base64_pem}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#bucket_name DatabaseSecretsMount#bucket_name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountElasticsearch <a name="DatabaseSecretsMountElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountElasticsearch {
	Name: *string,
	Password: *string,
	Url: *string,
	Username: *string,
	AllowedRoles: *[]*string,
	CaCert: *string,
	CaPath: *string,
	ClientCert: *string,
	ClientKey: *string,
	Data: *map[string]*string,
	Insecure: interface{},
	PluginName: *string,
	RootRotationStatements: *[]*string,
	TlsServerName: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password">Password</a></code> | <code>*string</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url">Url</a></code> | <code>*string</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username">Username</a></code> | <code>*string</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert">CaCert</a></code> | <code>*string</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath">CaPath</a></code> | <code>*string</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert">ClientCert</a></code> | <code>*string</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey">ClientKey</a></code> | <code>*string</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure">Insecure</a></code> | <code>interface{}</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath"></a>

```go
CaPath *string
```

- *Type:* *string

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#ca_path DatabaseSecretsMount#ca_path}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert"></a>

```go
ClientCert *string
```

- *Type:* *string

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#client_cert DatabaseSecretsMount#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#client_key DatabaseSecretsMount#client_key}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#insecure DatabaseSecretsMount#insecure}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName"></a>

```go
TlsServerName *string
```

- *Type:* *string

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_server_name DatabaseSecretsMount#tls_server_name}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountHana <a name="DatabaseSecretsMountHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountHana {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountInfluxdb <a name="DatabaseSecretsMountInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountInfluxdb {
	Host: *string,
	Name: *string,
	Password: *string,
	Username: *string,
	AllowedRoles: *[]*string,
	ConnectTimeout: *f64,
	Data: *map[string]*string,
	InsecureTls: interface{},
	PemBundle: *string,
	PemJson: *string,
	PluginName: *string,
	Port: *f64,
	RootRotationStatements: *[]*string,
	Tls: interface{},
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host">Host</a></code> | <code>*string</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username">Username</a></code> | <code>*string</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle">PemBundle</a></code> | <code>*string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson">PemJson</a></code> | <code>*string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls">Tls</a></code> | <code>interface{}</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host"></a>

```go
Host *string
```

- *Type:* *string

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle"></a>

```go
PemBundle *string
```

- *Type:* *string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson"></a>

```go
PemJson *string
```

- *Type:* *string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodb <a name="DatabaseSecretsMountMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMongodb {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodbatlas <a name="DatabaseSecretsMountMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMongodbatlas {
	Name: *string,
	PrivateKey: *string,
	ProjectId: *string,
	PublicKey: *string,
	AllowedRoles: *[]*string,
	Data: *map[string]*string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId">ProjectId</a></code> | <code>*string</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey">PublicKey</a></code> | <code>*string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#private_key DatabaseSecretsMount#private_key}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#project_id DatabaseSecretsMount#project_id}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#public_key DatabaseSecretsMount#public_key}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMssql <a name="DatabaseSecretsMountMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMssql {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	ContainedDb: interface{},
	Data: *map[string]*string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb">ContainedDb</a></code> | <code>interface{}</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `ContainedDb`<sup>Optional</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb"></a>

```go
ContainedDb interface{}
```

- *Type:* interface{}

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#contained_db DatabaseSecretsMount#contained_db}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysql <a name="DatabaseSecretsMountMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMysql {
	Name: *string,
	AllowedRoles: *[]*string,
	AuthType: *string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	ServiceAccountJson: *string,
	TlsCa: *string,
	TlsCertificateKey: *string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa">TlsCa</a></code> | <code>*string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa"></a>

```go
TlsCa *string
```

- *Type:* *string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey"></a>

```go
TlsCertificateKey *string
```

- *Type:* *string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlAurora <a name="DatabaseSecretsMountMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMysqlAurora {
	Name: *string,
	AllowedRoles: *[]*string,
	AuthType: *string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	ServiceAccountJson: *string,
	TlsCa: *string,
	TlsCertificateKey: *string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.tlsCa">TlsCa</a></code> | <code>*string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.tlsCa"></a>

```go
TlsCa *string
```

- *Type:* *string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.tlsCertificateKey"></a>

```go
TlsCertificateKey *string
```

- *Type:* *string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlLegacy <a name="DatabaseSecretsMountMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMysqlLegacy {
	Name: *string,
	AllowedRoles: *[]*string,
	AuthType: *string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	ServiceAccountJson: *string,
	TlsCa: *string,
	TlsCertificateKey: *string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.tlsCa">TlsCa</a></code> | <code>*string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.tlsCa"></a>

```go
TlsCa *string
```

- *Type:* *string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.tlsCertificateKey"></a>

```go
TlsCertificateKey *string
```

- *Type:* *string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlRds <a name="DatabaseSecretsMountMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountMysqlRds {
	Name: *string,
	AllowedRoles: *[]*string,
	AuthType: *string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	ServiceAccountJson: *string,
	TlsCa: *string,
	TlsCertificateKey: *string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.tlsCa">TlsCa</a></code> | <code>*string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.tlsCa"></a>

```go
TlsCa *string
```

- *Type:* *string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.tlsCertificateKey"></a>

```go
TlsCertificateKey *string
```

- *Type:* *string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountOracle <a name="DatabaseSecretsMountOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountOracle {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountPostgresql <a name="DatabaseSecretsMountPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountPostgresql {
	Name: *string,
	AllowedRoles: *[]*string,
	AuthType: *string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	ServiceAccountJson: *string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.authType">AuthType</a></code> | <code>*string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.serviceAccountJson"></a>

```go
ServiceAccountJson *string
```

- *Type:* *string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedis <a name="DatabaseSecretsMountRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountRedis {
	Host: *string,
	Name: *string,
	Password: *string,
	Username: *string,
	AllowedRoles: *[]*string,
	CaCert: *string,
	Data: *map[string]*string,
	InsecureTls: interface{},
	PluginName: *string,
	Port: *f64,
	RootRotationStatements: *[]*string,
	Tls: interface{},
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host">Host</a></code> | <code>*string</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password">Password</a></code> | <code>*string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username">Username</a></code> | <code>*string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert">CaCert</a></code> | <code>*string</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port">Port</a></code> | <code>*f64</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls">Tls</a></code> | <code>interface{}</code> | Specifies whether to use TLS when connecting to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host"></a>

```go
Host *string
```

- *Type:* *string

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password"></a>

```go
Password *string
```

- *Type:* *string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username"></a>

```go
Username *string
```

- *Type:* *string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedisElasticache <a name="DatabaseSecretsMountRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountRedisElasticache {
	Name: *string,
	Url: *string,
	AllowedRoles: *[]*string,
	Data: *map[string]*string,
	Password: *string,
	PluginName: *string,
	Region: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url">Url</a></code> | <code>*string</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password">Password</a></code> | <code>*string</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region">Region</a></code> | <code>*string</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username">Username</a></code> | <code>*string</code> | The AWS access key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url"></a>

```go
Url *string
```

- *Type:* *string

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password"></a>

```go
Password *string
```

- *Type:* *string

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#region DatabaseSecretsMount#region}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username"></a>

```go
Username *string
```

- *Type:* *string

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedshift <a name="DatabaseSecretsMountRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountRedshift {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	DisableEscaping: interface{},
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping"></a>

```go
DisableEscaping interface{}
```

- *Type:* interface{}

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountSnowflake <a name="DatabaseSecretsMountSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

&databasesecretsmount.DatabaseSecretsMountSnowflake {
	Name: *string,
	AllowedRoles: *[]*string,
	ConnectionUrl: *string,
	Data: *map[string]*string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Password: *string,
	PluginName: *string,
	RootRotationStatements: *[]*string,
	Username: *string,
	UsernameTemplate: *string,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name">Name</a></code> | <code>*string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data">Data</a></code> | <code>*map[string]*string</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password">Password</a></code> | <code>*string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName">PluginName</a></code> | <code>*string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username">Username</a></code> | <code>*string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data"></a>

```go
Data *map[string]*string
```

- *Type:* *map[string]*string

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password"></a>

```go
Password *string
```

- *Type:* *string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements"></a>

```go
RootRotationStatements *[]*string
```

- *Type:* *[]*string

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username"></a>

```go
Username *string
```

- *Type:* *string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretsMountCassandraList <a name="DatabaseSecretsMountCassandraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountCassandraList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountCassandraList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountCassandraOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountCassandraOutputReference <a name="DatabaseSecretsMountCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountCassandraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountCassandraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle"></a>

```go
func ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson"></a>

```go
func ResetPemJson()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion"></a>

```go
func ResetProtocolVersion()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle">PemBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson">PemJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput"></a>

```go
func PemBundleInput() *string
```

- *Type:* *string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput"></a>

```go
func PemJsonInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *f64
```

- *Type:* *f64

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle"></a>

```go
func PemBundle() *string
```

- *Type:* *string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson"></a>

```go
func PemJson() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion"></a>

```go
func ProtocolVersion() *f64
```

- *Type:* *f64

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountCouchbaseList <a name="DatabaseSecretsMountCouchbaseList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountCouchbaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountCouchbaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountCouchbaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountCouchbaseOutputReference <a name="DatabaseSecretsMountCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountCouchbaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountCouchbaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem">ResetBase64Pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetBase64Pem` <a name="ResetBase64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem"></a>

```go
func ResetBase64Pem()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput">Base64PemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem">Base64Pem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Base64PemInput`<sup>Optional</sup> <a name="Base64PemInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput"></a>

```go
func Base64PemInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Base64Pem`<sup>Required</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem"></a>

```go
func Base64Pem() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountElasticsearchList <a name="DatabaseSecretsMountElasticsearchList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountElasticsearchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountElasticsearchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountElasticsearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountElasticsearchOutputReference <a name="DatabaseSecretsMountElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountElasticsearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountElasticsearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath">ResetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert"></a>

```go
func ResetCaCert()
```

##### `ResetCaPath` <a name="ResetCaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath"></a>

```go
func ResetCaPath()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert"></a>

```go
func ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName"></a>

```go
func ResetTlsServerName()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput">CaPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput">ClientCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath">CaPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert">ClientCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `CaPathInput`<sup>Optional</sup> <a name="CaPathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput"></a>

```go
func CaPathInput() *string
```

- *Type:* *string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput"></a>

```go
func ClientCertInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput"></a>

```go
func TlsServerNameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `CaPath`<sup>Required</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath"></a>

```go
func CaPath() *string
```

- *Type:* *string

---

##### `ClientCert`<sup>Required</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert"></a>

```go
func ClientCert() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `TlsServerName`<sup>Required</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName"></a>

```go
func TlsServerName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountHanaList <a name="DatabaseSecretsMountHanaList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountHanaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountHanaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountHanaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountHanaOutputReference <a name="DatabaseSecretsMountHanaOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountHanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountHanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountInfluxdbList <a name="DatabaseSecretsMountInfluxdbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountInfluxdbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountInfluxdbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountInfluxdbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountInfluxdbOutputReference <a name="DatabaseSecretsMountInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountInfluxdbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountInfluxdbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle"></a>

```go
func ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson"></a>

```go
func ResetPemJson()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle">PemBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson">PemJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput"></a>

```go
func PemBundleInput() *string
```

- *Type:* *string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput"></a>

```go
func PemJsonInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle"></a>

```go
func PemBundle() *string
```

- *Type:* *string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson"></a>

```go
func PemJson() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMongodbatlasList <a name="DatabaseSecretsMountMongodbatlasList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMongodbatlasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMongodbatlasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMongodbatlasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMongodbatlasOutputReference <a name="DatabaseSecretsMountMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMongodbatlasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMongodbatlasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMongodbList <a name="DatabaseSecretsMountMongodbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMongodbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMongodbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMongodbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMongodbOutputReference <a name="DatabaseSecretsMountMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMongodbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMongodbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMssqlList <a name="DatabaseSecretsMountMssqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMssqlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMssqlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMssqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMssqlOutputReference <a name="DatabaseSecretsMountMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMssqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMssqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb">ResetContainedDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetContainedDb` <a name="ResetContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb"></a>

```go
func ResetContainedDb()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput">ContainedDbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb">ContainedDb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `ContainedDbInput`<sup>Optional</sup> <a name="ContainedDbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput"></a>

```go
func ContainedDbInput() interface{}
```

- *Type:* interface{}

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `ContainedDb`<sup>Required</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb"></a>

```go
func ContainedDb() interface{}
```

- *Type:* interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlAuroraList <a name="DatabaseSecretsMountMysqlAuroraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlAuroraList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMysqlAuroraList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMysqlAuroraOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlAuroraOutputReference <a name="DatabaseSecretsMountMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlAuroraOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMysqlAuroraOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetTlsCa"></a>

```go
func ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetTlsCertificateKey"></a>

```go
func ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCa">TlsCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCaInput"></a>

```go
func TlsCaInput() *string
```

- *Type:* *string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCertificateKeyInput"></a>

```go
func TlsCertificateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCa"></a>

```go
func TlsCa() *string
```

- *Type:* *string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.tlsCertificateKey"></a>

```go
func TlsCertificateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlLegacyList <a name="DatabaseSecretsMountMysqlLegacyList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlLegacyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMysqlLegacyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMysqlLegacyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlLegacyOutputReference <a name="DatabaseSecretsMountMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlLegacyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMysqlLegacyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetTlsCa"></a>

```go
func ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetTlsCertificateKey"></a>

```go
func ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCa">TlsCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCaInput"></a>

```go
func TlsCaInput() *string
```

- *Type:* *string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCertificateKeyInput"></a>

```go
func TlsCertificateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCa"></a>

```go
func TlsCa() *string
```

- *Type:* *string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.tlsCertificateKey"></a>

```go
func TlsCertificateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlList <a name="DatabaseSecretsMountMysqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMysqlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMysqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlOutputReference <a name="DatabaseSecretsMountMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMysqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa"></a>

```go
func ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey"></a>

```go
func ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa">TlsCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput"></a>

```go
func TlsCaInput() *string
```

- *Type:* *string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```go
func TlsCertificateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa"></a>

```go
func TlsCa() *string
```

- *Type:* *string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey"></a>

```go
func TlsCertificateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlRdsList <a name="DatabaseSecretsMountMysqlRdsList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlRdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountMysqlRdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountMysqlRdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountMysqlRdsOutputReference <a name="DatabaseSecretsMountMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountMysqlRdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountMysqlRdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetTlsCa"></a>

```go
func ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetTlsCertificateKey"></a>

```go
func ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCa">TlsCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCaInput"></a>

```go
func TlsCaInput() *string
```

- *Type:* *string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCertificateKeyInput"></a>

```go
func TlsCertificateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCa"></a>

```go
func TlsCa() *string
```

- *Type:* *string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.tlsCertificateKey"></a>

```go
func TlsCertificateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountOracleList <a name="DatabaseSecretsMountOracleList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountOracleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountOracleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountOracleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountOracleOutputReference <a name="DatabaseSecretsMountOracleOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountOracleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountOracleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountPostgresqlList <a name="DatabaseSecretsMountPostgresqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountPostgresqlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountPostgresqlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountPostgresqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountPostgresqlOutputReference <a name="DatabaseSecretsMountPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountPostgresqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountPostgresqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetServiceAccountJson"></a>

```go
func ResetServiceAccountJson()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```go
func ServiceAccountJsonInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJson"></a>

```go
func ServiceAccountJson() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedisElasticacheList <a name="DatabaseSecretsMountRedisElasticacheList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedisElasticacheList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountRedisElasticacheList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountRedisElasticacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedisElasticacheOutputReference <a name="DatabaseSecretsMountRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedisElasticacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountRedisElasticacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedisList <a name="DatabaseSecretsMountRedisList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountRedisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountRedisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedisOutputReference <a name="DatabaseSecretsMountRedisOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountRedisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert"></a>

```go
func ResetCaCert()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedshiftList <a name="DatabaseSecretsMountRedshiftList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedshiftList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountRedshiftList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountRedshiftOutputReference <a name="DatabaseSecretsMountRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountRedshiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountRedshiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping"></a>

```go
func ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput"></a>

```go
func DisableEscapingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping"></a>

```go
func DisableEscaping() interface{}
```

- *Type:* interface{}

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountSnowflakeList <a name="DatabaseSecretsMountSnowflakeList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountSnowflakeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseSecretsMountSnowflakeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get"></a>

```go
func Get(index *f64) DatabaseSecretsMountSnowflakeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseSecretsMountSnowflakeOutputReference <a name="DatabaseSecretsMountSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v12/databasesecretsmount"

databasesecretsmount.NewDatabaseSecretsMountSnowflakeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseSecretsMountSnowflakeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName"></a>

```go
func ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements"></a>

```go
func ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput">DataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data">Data</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput"></a>

```go
func DataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput"></a>

```go
func RootRotationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data"></a>

```go
func Data() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements"></a>

```go
func RootRotationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



