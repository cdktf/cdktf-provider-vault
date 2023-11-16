# `vault_database_secret_backend_connection`

Refer to the Terraform Registory for docs: [`vault_database_secret_backend_connection`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection).

# `databaseSecretBackendConnection` Submodule <a name="`databaseSecretBackendConnection` Submodule" id="@cdktf/provider-vault.databaseSecretBackendConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendConnection <a name="DatabaseSecretBackendConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnection;

DatabaseSecretBackendConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .cassandra(DatabaseSecretBackendConnectionCassandra)
//  .couchbase(DatabaseSecretBackendConnectionCouchbase)
//  .data(java.util.Map<java.lang.String, java.lang.String>)
//  .elasticsearch(DatabaseSecretBackendConnectionElasticsearch)
//  .hana(DatabaseSecretBackendConnectionHana)
//  .id(java.lang.String)
//  .influxdb(DatabaseSecretBackendConnectionInfluxdb)
//  .mongodb(DatabaseSecretBackendConnectionMongodb)
//  .mongodbatlas(DatabaseSecretBackendConnectionMongodbatlas)
//  .mssql(DatabaseSecretBackendConnectionMssql)
//  .mysql(DatabaseSecretBackendConnectionMysql)
//  .mysqlAurora(DatabaseSecretBackendConnectionMysqlAurora)
//  .mysqlLegacy(DatabaseSecretBackendConnectionMysqlLegacy)
//  .mysqlRds(DatabaseSecretBackendConnectionMysqlRds)
//  .namespace(java.lang.String)
//  .oracle(DatabaseSecretBackendConnectionOracle)
//  .pluginName(java.lang.String)
//  .postgresql(DatabaseSecretBackendConnectionPostgresql)
//  .redis(DatabaseSecretBackendConnectionRedis)
//  .redisElasticache(DatabaseSecretBackendConnectionRedisElasticache)
//  .redshift(DatabaseSecretBackendConnectionRedshift)
//  .rootRotationStatements(java.util.List<java.lang.String>)
//  .snowflake(DatabaseSecretBackendConnectionSnowflake)
//  .verifyConnection(java.lang.Boolean)
//  .verifyConnection(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.data">data</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlAurora">mysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlLegacy">mysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlRds">mysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redisElasticache">redisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rootRotationStatements">rootRotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.cassandra"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.couchbase"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.data"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.elasticsearch"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.hana"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.influxdb"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodb"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodbatlas"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mssql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `mysqlAurora`<sup>Optional</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlAurora"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `mysqlLegacy`<sup>Optional</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlLegacy"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `mysqlRds`<sup>Optional</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlRds"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.oracle"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.pluginName"></a>

- *Type:* java.lang.String

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redis"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `redisElasticache`<sup>Optional</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redisElasticache"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redshift"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rootRotationStatements"></a>

- *Type:* java.util.List<java.lang.String>

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.snowflake"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.verifyConnection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCassandra` <a name="putCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra"></a>

```java
public void putCassandra(DatabaseSecretBackendConnectionCassandra value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `putCouchbase` <a name="putCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase"></a>

```java
public void putCouchbase(DatabaseSecretBackendConnectionCouchbase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `putElasticsearch` <a name="putElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch"></a>

```java
public void putElasticsearch(DatabaseSecretBackendConnectionElasticsearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `putHana` <a name="putHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana"></a>

```java
public void putHana(DatabaseSecretBackendConnectionHana value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `putInfluxdb` <a name="putInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb"></a>

```java
public void putInfluxdb(DatabaseSecretBackendConnectionInfluxdb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `putMongodb` <a name="putMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb"></a>

```java
public void putMongodb(DatabaseSecretBackendConnectionMongodb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `putMongodbatlas` <a name="putMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas"></a>

```java
public void putMongodbatlas(DatabaseSecretBackendConnectionMongodbatlas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `putMssql` <a name="putMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql"></a>

```java
public void putMssql(DatabaseSecretBackendConnectionMssql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql"></a>

```java
public void putMysql(DatabaseSecretBackendConnectionMysql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `putMysqlAurora` <a name="putMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora"></a>

```java
public void putMysqlAurora(DatabaseSecretBackendConnectionMysqlAurora value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `putMysqlLegacy` <a name="putMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy"></a>

```java
public void putMysqlLegacy(DatabaseSecretBackendConnectionMysqlLegacy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `putMysqlRds` <a name="putMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds"></a>

```java
public void putMysqlRds(DatabaseSecretBackendConnectionMysqlRds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle"></a>

```java
public void putOracle(DatabaseSecretBackendConnectionOracle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql"></a>

```java
public void putPostgresql(DatabaseSecretBackendConnectionPostgresql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `putRedis` <a name="putRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis"></a>

```java
public void putRedis(DatabaseSecretBackendConnectionRedis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `putRedisElasticache` <a name="putRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache"></a>

```java
public void putRedisElasticache(DatabaseSecretBackendConnectionRedisElasticache value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `putRedshift` <a name="putRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift"></a>

```java
public void putRedshift(DatabaseSecretBackendConnectionRedshift value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `putSnowflake` <a name="putSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake"></a>

```java
public void putSnowflake(DatabaseSecretBackendConnectionSnowflake value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetCassandra` <a name="resetCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra"></a>

```java
public void resetCassandra()
```

##### `resetCouchbase` <a name="resetCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase"></a>

```java
public void resetCouchbase()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData"></a>

```java
public void resetData()
```

##### `resetElasticsearch` <a name="resetElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch"></a>

```java
public void resetElasticsearch()
```

##### `resetHana` <a name="resetHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana"></a>

```java
public void resetHana()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId"></a>

```java
public void resetId()
```

##### `resetInfluxdb` <a name="resetInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb"></a>

```java
public void resetInfluxdb()
```

##### `resetMongodb` <a name="resetMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb"></a>

```java
public void resetMongodb()
```

##### `resetMongodbatlas` <a name="resetMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas"></a>

```java
public void resetMongodbatlas()
```

##### `resetMssql` <a name="resetMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql"></a>

```java
public void resetMssql()
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql"></a>

```java
public void resetMysql()
```

##### `resetMysqlAurora` <a name="resetMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora"></a>

```java
public void resetMysqlAurora()
```

##### `resetMysqlLegacy` <a name="resetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy"></a>

```java
public void resetMysqlLegacy()
```

##### `resetMysqlRds` <a name="resetMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds"></a>

```java
public void resetMysqlRds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle"></a>

```java
public void resetOracle()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql"></a>

```java
public void resetPostgresql()
```

##### `resetRedis` <a name="resetRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis"></a>

```java
public void resetRedis()
```

##### `resetRedisElasticache` <a name="resetRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache"></a>

```java
public void resetRedisElasticache()
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift"></a>

```java
public void resetRedshift()
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements"></a>

```java
public void resetRootRotationStatements()
```

##### `resetSnowflake` <a name="resetSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake"></a>

```java
public void resetSnowflake()
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection"></a>

```java
public void resetVerifyConnection()
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

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnection;

DatabaseSecretBackendConnection.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnection;

DatabaseSecretBackendConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnection;

DatabaseSecretBackendConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnection;

DatabaseSecretBackendConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseSecretBackendConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseSecretBackendConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseSecretBackendConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput">cassandraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput">couchbaseInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput">dataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput">elasticsearchInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput">hanaInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput">influxdbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput">mongodbatlasInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput">mongodbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput">mssqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput">mysqlAuroraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput">mysqlLegacyInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput">mysqlRdsInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput">oracleInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput">redisElasticacheInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput">redisInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput">redshiftInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput">snowflakeInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data">data</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements">rootRotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cassandra`<sup>Required</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra"></a>

```java
public DatabaseSecretBackendConnectionCassandraOutputReference getCassandra();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a>

---

##### `couchbase`<sup>Required</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase"></a>

```java
public DatabaseSecretBackendConnectionCouchbaseOutputReference getCouchbase();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch"></a>

```java
public DatabaseSecretBackendConnectionElasticsearchOutputReference getElasticsearch();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a>

---

##### `hana`<sup>Required</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana"></a>

```java
public DatabaseSecretBackendConnectionHanaOutputReference getHana();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a>

---

##### `influxdb`<sup>Required</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb"></a>

```java
public DatabaseSecretBackendConnectionInfluxdbOutputReference getInfluxdb();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a>

---

##### `mongodb`<sup>Required</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb"></a>

```java
public DatabaseSecretBackendConnectionMongodbOutputReference getMongodb();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a>

---

##### `mongodbatlas`<sup>Required</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas"></a>

```java
public DatabaseSecretBackendConnectionMongodbatlasOutputReference getMongodbatlas();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a>

---

##### `mssql`<sup>Required</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql"></a>

```java
public DatabaseSecretBackendConnectionMssqlOutputReference getMssql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql"></a>

```java
public DatabaseSecretBackendConnectionMysqlOutputReference getMysql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a>

---

##### `mysqlAurora`<sup>Required</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora"></a>

```java
public DatabaseSecretBackendConnectionMysqlAuroraOutputReference getMysqlAurora();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a>

---

##### `mysqlLegacy`<sup>Required</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy"></a>

```java
public DatabaseSecretBackendConnectionMysqlLegacyOutputReference getMysqlLegacy();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a>

---

##### `mysqlRds`<sup>Required</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds"></a>

```java
public DatabaseSecretBackendConnectionMysqlRdsOutputReference getMysqlRds();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle"></a>

```java
public DatabaseSecretBackendConnectionOracleOutputReference getOracle();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql"></a>

```java
public DatabaseSecretBackendConnectionPostgresqlOutputReference getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis"></a>

```java
public DatabaseSecretBackendConnectionRedisOutputReference getRedis();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a>

---

##### `redisElasticache`<sup>Required</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache"></a>

```java
public DatabaseSecretBackendConnectionRedisElasticacheOutputReference getRedisElasticache();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift"></a>

```java
public DatabaseSecretBackendConnectionRedshiftOutputReference getRedshift();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake"></a>

```java
public DatabaseSecretBackendConnectionSnowflakeOutputReference getSnowflake();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a>

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `cassandraInput`<sup>Optional</sup> <a name="cassandraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput"></a>

```java
public DatabaseSecretBackendConnectionCassandra getCassandraInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `couchbaseInput`<sup>Optional</sup> <a name="couchbaseInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput"></a>

```java
public DatabaseSecretBackendConnectionCouchbase getCouchbaseInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `elasticsearchInput`<sup>Optional</sup> <a name="elasticsearchInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput"></a>

```java
public DatabaseSecretBackendConnectionElasticsearch getElasticsearchInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `hanaInput`<sup>Optional</sup> <a name="hanaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput"></a>

```java
public DatabaseSecretBackendConnectionHana getHanaInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `influxdbInput`<sup>Optional</sup> <a name="influxdbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput"></a>

```java
public DatabaseSecretBackendConnectionInfluxdb getInfluxdbInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `mongodbatlasInput`<sup>Optional</sup> <a name="mongodbatlasInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput"></a>

```java
public DatabaseSecretBackendConnectionMongodbatlas getMongodbatlasInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `mongodbInput`<sup>Optional</sup> <a name="mongodbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput"></a>

```java
public DatabaseSecretBackendConnectionMongodb getMongodbInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `mssqlInput`<sup>Optional</sup> <a name="mssqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput"></a>

```java
public DatabaseSecretBackendConnectionMssql getMssqlInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `mysqlAuroraInput`<sup>Optional</sup> <a name="mysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput"></a>

```java
public DatabaseSecretBackendConnectionMysqlAurora getMysqlAuroraInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput"></a>

```java
public DatabaseSecretBackendConnectionMysql getMysqlInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `mysqlLegacyInput`<sup>Optional</sup> <a name="mysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput"></a>

```java
public DatabaseSecretBackendConnectionMysqlLegacy getMysqlLegacyInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `mysqlRdsInput`<sup>Optional</sup> <a name="mysqlRdsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput"></a>

```java
public DatabaseSecretBackendConnectionMysqlRds getMysqlRdsInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput"></a>

```java
public DatabaseSecretBackendConnectionOracle getOracleInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput"></a>

```java
public DatabaseSecretBackendConnectionPostgresql getPostgresqlInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `redisElasticacheInput`<sup>Optional</sup> <a name="redisElasticacheInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput"></a>

```java
public DatabaseSecretBackendConnectionRedisElasticache getRedisElasticacheInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `redisInput`<sup>Optional</sup> <a name="redisInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput"></a>

```java
public DatabaseSecretBackendConnectionRedis getRedisInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput"></a>

```java
public DatabaseSecretBackendConnectionRedshift getRedshiftInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput"></a>

```java
public java.util.List<java.lang.String> getRootRotationStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snowflakeInput`<sup>Optional</sup> <a name="snowflakeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput"></a>

```java
public DatabaseSecretBackendConnectionSnowflake getSnowflakeInput();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput"></a>

```java
public java.lang.Object getVerifyConnectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements"></a>

```java
public java.util.List<java.lang.String> getRootRotationStatements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection"></a>

```java
public java.lang.Object getVerifyConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendConnectionCassandra <a name="DatabaseSecretBackendConnectionCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionCassandra;

DatabaseSecretBackendConnectionCassandra.builder()
//  .connectTimeout(java.lang.Number)
//  .hosts(java.util.List<java.lang.String>)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .password(java.lang.String)
//  .pemBundle(java.lang.String)
//  .pemJson(java.lang.String)
//  .port(java.lang.Number)
//  .protocolVersion(java.lang.Number)
//  .tls(java.lang.Boolean)
//  .tls(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password">password</a></code> | <code>java.lang.String</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle">pemBundle</a></code> | <code>java.lang.String</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson">pemJson</a></code> | <code>java.lang.String</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port">port</a></code> | <code>java.lang.Number</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.Number</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username">username</a></code> | <code>java.lang.String</code> | The username to use when authenticating with Cassandra. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle"></a>

```java
public java.lang.String getPemBundle();
```

- *Type:* java.lang.String

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson"></a>

```java
public java.lang.String getPemJson();
```

- *Type:* java.lang.String

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion"></a>

```java
public java.lang.Number getProtocolVersion();
```

- *Type:* java.lang.Number

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionConfig <a name="DatabaseSecretBackendConnectionConfig" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionConfig;

DatabaseSecretBackendConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .cassandra(DatabaseSecretBackendConnectionCassandra)
//  .couchbase(DatabaseSecretBackendConnectionCouchbase)
//  .data(java.util.Map<java.lang.String, java.lang.String>)
//  .elasticsearch(DatabaseSecretBackendConnectionElasticsearch)
//  .hana(DatabaseSecretBackendConnectionHana)
//  .id(java.lang.String)
//  .influxdb(DatabaseSecretBackendConnectionInfluxdb)
//  .mongodb(DatabaseSecretBackendConnectionMongodb)
//  .mongodbatlas(DatabaseSecretBackendConnectionMongodbatlas)
//  .mssql(DatabaseSecretBackendConnectionMssql)
//  .mysql(DatabaseSecretBackendConnectionMysql)
//  .mysqlAurora(DatabaseSecretBackendConnectionMysqlAurora)
//  .mysqlLegacy(DatabaseSecretBackendConnectionMysqlLegacy)
//  .mysqlRds(DatabaseSecretBackendConnectionMysqlRds)
//  .namespace(java.lang.String)
//  .oracle(DatabaseSecretBackendConnectionOracle)
//  .pluginName(java.lang.String)
//  .postgresql(DatabaseSecretBackendConnectionPostgresql)
//  .redis(DatabaseSecretBackendConnectionRedis)
//  .redisElasticache(DatabaseSecretBackendConnectionRedisElasticache)
//  .redshift(DatabaseSecretBackendConnectionRedshift)
//  .rootRotationStatements(java.util.List<java.lang.String>)
//  .snowflake(DatabaseSecretBackendConnectionSnowflake)
//  .verifyConnection(java.lang.Boolean)
//  .verifyConnection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data">data</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora">mysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy">mysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds">mysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache">redisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements">rootRotationStatements</a></code> | <code>java.util.List<java.lang.String></code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra"></a>

```java
public DatabaseSecretBackendConnectionCassandra getCassandra();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase"></a>

```java
public DatabaseSecretBackendConnectionCouchbase getCouchbase();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch"></a>

```java
public DatabaseSecretBackendConnectionElasticsearch getElasticsearch();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana"></a>

```java
public DatabaseSecretBackendConnectionHana getHana();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb"></a>

```java
public DatabaseSecretBackendConnectionInfluxdb getInfluxdb();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb"></a>

```java
public DatabaseSecretBackendConnectionMongodb getMongodb();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas"></a>

```java
public DatabaseSecretBackendConnectionMongodbatlas getMongodbatlas();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql"></a>

```java
public DatabaseSecretBackendConnectionMssql getMssql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql"></a>

```java
public DatabaseSecretBackendConnectionMysql getMysql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `mysqlAurora`<sup>Optional</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora"></a>

```java
public DatabaseSecretBackendConnectionMysqlAurora getMysqlAurora();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `mysqlLegacy`<sup>Optional</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy"></a>

```java
public DatabaseSecretBackendConnectionMysqlLegacy getMysqlLegacy();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `mysqlRds`<sup>Optional</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds"></a>

```java
public DatabaseSecretBackendConnectionMysqlRds getMysqlRds();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle"></a>

```java
public DatabaseSecretBackendConnectionOracle getOracle();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql"></a>

```java
public DatabaseSecretBackendConnectionPostgresql getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis"></a>

```java
public DatabaseSecretBackendConnectionRedis getRedis();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `redisElasticache`<sup>Optional</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache"></a>

```java
public DatabaseSecretBackendConnectionRedisElasticache getRedisElasticache();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift"></a>

```java
public DatabaseSecretBackendConnectionRedshift getRedshift();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements"></a>

```java
public java.util.List<java.lang.String> getRootRotationStatements();
```

- *Type:* java.util.List<java.lang.String>

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake"></a>

```java
public DatabaseSecretBackendConnectionSnowflake getSnowflake();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection"></a>

```java
public java.lang.Object getVerifyConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

### DatabaseSecretBackendConnectionCouchbase <a name="DatabaseSecretBackendConnectionCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionCouchbase;

DatabaseSecretBackendConnectionCouchbase.builder()
    .hosts(java.util.List<java.lang.String>)
    .password(java.lang.String)
    .username(java.lang.String)
//  .base64Pem(java.lang.String)
//  .bucketName(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .tls(java.lang.Boolean)
//  .tls(IResolvable)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password">password</a></code> | <code>java.lang.String</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem">base64Pem</a></code> | <code>java.lang.String</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `base64Pem`<sup>Optional</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem"></a>

```java
public java.lang.String getBase64Pem();
```

- *Type:* java.lang.String

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionElasticsearch <a name="DatabaseSecretBackendConnectionElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionElasticsearch;

DatabaseSecretBackendConnectionElasticsearch.builder()
    .password(java.lang.String)
    .url(java.lang.String)
    .username(java.lang.String)
//  .caCert(java.lang.String)
//  .caPath(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .tlsServerName(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password">password</a></code> | <code>java.lang.String</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url">url</a></code> | <code>java.lang.String</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username">username</a></code> | <code>java.lang.String</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert">caCert</a></code> | <code>java.lang.String</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath">caPath</a></code> | <code>java.lang.String</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath"></a>

```java
public java.lang.String getCaPath();
```

- *Type:* java.lang.String

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionHana <a name="DatabaseSecretBackendConnectionHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionHana;

DatabaseSecretBackendConnectionHana.builder()
//  .connectionUrl(java.lang.String)
//  .disableEscaping(java.lang.Boolean)
//  .disableEscaping(IResolvable)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionInfluxdb <a name="DatabaseSecretBackendConnectionInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionInfluxdb;

DatabaseSecretBackendConnectionInfluxdb.builder()
    .host(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .connectTimeout(java.lang.Number)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .pemBundle(java.lang.String)
//  .pemJson(java.lang.String)
//  .port(java.lang.Number)
//  .tls(java.lang.Boolean)
//  .tls(IResolvable)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host">host</a></code> | <code>java.lang.String</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password">password</a></code> | <code>java.lang.String</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle">pemBundle</a></code> | <code>java.lang.String</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson">pemJson</a></code> | <code>java.lang.String</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port">port</a></code> | <code>java.lang.Number</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle"></a>

```java
public java.lang.String getPemBundle();
```

- *Type:* java.lang.String

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson"></a>

```java
public java.lang.String getPemJson();
```

- *Type:* java.lang.String

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodb <a name="DatabaseSecretBackendConnectionMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMongodb;

DatabaseSecretBackendConnectionMongodb.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodbatlas <a name="DatabaseSecretBackendConnectionMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMongodbatlas;

DatabaseSecretBackendConnectionMongodbatlas.builder()
    .privateKey(java.lang.String)
    .projectId(java.lang.String)
    .publicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}

---

### DatabaseSecretBackendConnectionMssql <a name="DatabaseSecretBackendConnectionMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMssql;

DatabaseSecretBackendConnectionMssql.builder()
//  .connectionUrl(java.lang.String)
//  .containedDb(java.lang.Boolean)
//  .containedDb(IResolvable)
//  .disableEscaping(java.lang.Boolean)
//  .disableEscaping(IResolvable)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb">containedDb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `containedDb`<sup>Optional</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb"></a>

```java
public java.lang.Object getContainedDb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysql <a name="DatabaseSecretBackendConnectionMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysql;

DatabaseSecretBackendConnectionMysql.builder()
//  .authType(java.lang.String)
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .serviceAccountJson(java.lang.String)
//  .tlsCa(java.lang.String)
//  .tlsCertificateKey(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType">authType</a></code> | <code>java.lang.String</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson">serviceAccountJson</a></code> | <code>java.lang.String</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa">tlsCa</a></code> | <code>java.lang.String</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>java.lang.String</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson"></a>

```java
public java.lang.String getServiceAccountJson();
```

- *Type:* java.lang.String

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa"></a>

```java
public java.lang.String getTlsCa();
```

- *Type:* java.lang.String

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey"></a>

```java
public java.lang.String getTlsCertificateKey();
```

- *Type:* java.lang.String

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlAurora <a name="DatabaseSecretBackendConnectionMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlAurora;

DatabaseSecretBackendConnectionMysqlAurora.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlLegacy <a name="DatabaseSecretBackendConnectionMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlLegacy;

DatabaseSecretBackendConnectionMysqlLegacy.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlRds <a name="DatabaseSecretBackendConnectionMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlRds;

DatabaseSecretBackendConnectionMysqlRds.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionOracle <a name="DatabaseSecretBackendConnectionOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionOracle;

DatabaseSecretBackendConnectionOracle.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionPostgresql <a name="DatabaseSecretBackendConnectionPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionPostgresql;

DatabaseSecretBackendConnectionPostgresql.builder()
//  .authType(java.lang.String)
//  .connectionUrl(java.lang.String)
//  .disableEscaping(java.lang.Boolean)
//  .disableEscaping(IResolvable)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .serviceAccountJson(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType">authType</a></code> | <code>java.lang.String</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson">serviceAccountJson</a></code> | <code>java.lang.String</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson"></a>

```java
public java.lang.String getServiceAccountJson();
```

- *Type:* java.lang.String

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionRedis <a name="DatabaseSecretBackendConnectionRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedis;

DatabaseSecretBackendConnectionRedis.builder()
    .host(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .caCert(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .port(java.lang.Number)
//  .tls(java.lang.Boolean)
//  .tls(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host">host</a></code> | <code>java.lang.String</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password">password</a></code> | <code>java.lang.String</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert">caCert</a></code> | <code>java.lang.String</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port">port</a></code> | <code>java.lang.Number</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Redis. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

### DatabaseSecretBackendConnectionRedisElasticache <a name="DatabaseSecretBackendConnectionRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedisElasticache;

DatabaseSecretBackendConnectionRedisElasticache.builder()
    .url(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url">url</a></code> | <code>java.lang.String</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password">password</a></code> | <code>java.lang.String</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region">region</a></code> | <code>java.lang.String</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username">username</a></code> | <code>java.lang.String</code> | The AWS access key id to use to talk to ElastiCache. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionRedshift <a name="DatabaseSecretBackendConnectionRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedshift;

DatabaseSecretBackendConnectionRedshift.builder()
//  .connectionUrl(java.lang.String)
//  .disableEscaping(java.lang.Boolean)
//  .disableEscaping(IResolvable)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionSnowflake <a name="DatabaseSecretBackendConnectionSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionSnowflake;

DatabaseSecretBackendConnectionSnowflake.builder()
//  .connectionUrl(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .password(java.lang.String)
//  .username(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password">password</a></code> | <code>java.lang.String</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username">username</a></code> | <code>java.lang.String</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretBackendConnectionCassandraOutputReference <a name="DatabaseSecretBackendConnectionCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionCassandraOutputReference;

new DatabaseSecretBackendConnectionCassandraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle"></a>

```java
public void resetPemBundle()
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson"></a>

```java
public void resetPemJson()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls"></a>

```java
public void resetTls()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput">tlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle">pemBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson">pemJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput"></a>

```java
public java.lang.String getPemBundleInput();
```

- *Type:* java.lang.String

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput"></a>

```java
public java.lang.String getPemJsonInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.Number getProtocolVersionInput();
```

- *Type:* java.lang.Number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle"></a>

```java
public java.lang.String getPemBundle();
```

- *Type:* java.lang.String

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson"></a>

```java
public java.lang.String getPemJson();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion"></a>

```java
public java.lang.Number getProtocolVersion();
```

- *Type:* java.lang.Number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionCassandra getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---


### DatabaseSecretBackendConnectionCouchbaseOutputReference <a name="DatabaseSecretBackendConnectionCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionCouchbaseOutputReference;

new DatabaseSecretBackendConnectionCouchbaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase64Pem` <a name="resetBase64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem"></a>

```java
public void resetBase64Pem()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls"></a>

```java
public void resetTls()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput">base64PemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput">tlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem">base64Pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `base64PemInput`<sup>Optional</sup> <a name="base64PemInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput"></a>

```java
public java.lang.String getBase64PemInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `base64Pem`<sup>Required</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem"></a>

```java
public java.lang.String getBase64Pem();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionCouchbase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---


### DatabaseSecretBackendConnectionElasticsearchOutputReference <a name="DatabaseSecretBackendConnectionElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionElasticsearchOutputReference;

new DatabaseSecretBackendConnectionElasticsearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert"></a>

```java
public void resetCaCert()
```

##### `resetCaPath` <a name="resetCaPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath"></a>

```java
public void resetCaPath()
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert"></a>

```java
public void resetClientCert()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName"></a>

```java
public void resetTlsServerName()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput">caCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput">caPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert">caCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath">caPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput"></a>

```java
public java.lang.String getCaCertInput();
```

- *Type:* java.lang.String

---

##### `caPathInput`<sup>Optional</sup> <a name="caPathInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput"></a>

```java
public java.lang.String getCaPathInput();
```

- *Type:* java.lang.String

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput"></a>

```java
public java.lang.String getClientCertInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput"></a>

```java
public java.lang.String getTlsServerNameInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

---

##### `caPath`<sup>Required</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath"></a>

```java
public java.lang.String getCaPath();
```

- *Type:* java.lang.String

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `tlsServerName`<sup>Required</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionElasticsearch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---


### DatabaseSecretBackendConnectionHanaOutputReference <a name="DatabaseSecretBackendConnectionHanaOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionHanaOutputReference;

new DatabaseSecretBackendConnectionHanaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping"></a>

```java
public void resetDisableEscaping()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput"></a>

```java
public java.lang.Object getDisableEscapingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionHana getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---


### DatabaseSecretBackendConnectionInfluxdbOutputReference <a name="DatabaseSecretBackendConnectionInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionInfluxdbOutputReference;

new DatabaseSecretBackendConnectionInfluxdbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle"></a>

```java
public void resetPemBundle()
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson"></a>

```java
public void resetPemJson()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls"></a>

```java
public void resetTls()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput">tlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle">pemBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson">pemJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput"></a>

```java
public java.lang.String getPemBundleInput();
```

- *Type:* java.lang.String

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput"></a>

```java
public java.lang.String getPemJsonInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle"></a>

```java
public java.lang.String getPemBundle();
```

- *Type:* java.lang.String

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson"></a>

```java
public java.lang.String getPemJson();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionInfluxdb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---


### DatabaseSecretBackendConnectionMongodbatlasOutputReference <a name="DatabaseSecretBackendConnectionMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMongodbatlasOutputReference;

new DatabaseSecretBackendConnectionMongodbatlasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMongodbatlas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---


### DatabaseSecretBackendConnectionMongodbOutputReference <a name="DatabaseSecretBackendConnectionMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMongodbOutputReference;

new DatabaseSecretBackendConnectionMongodbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMongodb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---


### DatabaseSecretBackendConnectionMssqlOutputReference <a name="DatabaseSecretBackendConnectionMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMssqlOutputReference;

new DatabaseSecretBackendConnectionMssqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetContainedDb` <a name="resetContainedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb"></a>

```java
public void resetContainedDb()
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping"></a>

```java
public void resetDisableEscaping()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput">containedDbInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb">containedDb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `containedDbInput`<sup>Optional</sup> <a name="containedDbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput"></a>

```java
public java.lang.Object getContainedDbInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput"></a>

```java
public java.lang.Object getDisableEscapingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `containedDb`<sup>Required</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb"></a>

```java
public java.lang.Object getContainedDb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMssql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---


### DatabaseSecretBackendConnectionMysqlAuroraOutputReference <a name="DatabaseSecretBackendConnectionMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference;

new DatabaseSecretBackendConnectionMysqlAuroraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMysqlAurora getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---


### DatabaseSecretBackendConnectionMysqlLegacyOutputReference <a name="DatabaseSecretBackendConnectionMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference;

new DatabaseSecretBackendConnectionMysqlLegacyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMysqlLegacy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---


### DatabaseSecretBackendConnectionMysqlOutputReference <a name="DatabaseSecretBackendConnectionMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlOutputReference;

new DatabaseSecretBackendConnectionMysqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson"></a>

```java
public void resetServiceAccountJson()
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa"></a>

```java
public void resetTlsCa()
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey"></a>

```java
public void resetTlsCertificateKey()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa">tlsCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput"></a>

```java
public java.lang.String getServiceAccountJsonInput();
```

- *Type:* java.lang.String

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput"></a>

```java
public java.lang.String getTlsCaInput();
```

- *Type:* java.lang.String

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```java
public java.lang.String getTlsCertificateKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson"></a>

```java
public java.lang.String getServiceAccountJson();
```

- *Type:* java.lang.String

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa"></a>

```java
public java.lang.String getTlsCa();
```

- *Type:* java.lang.String

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey"></a>

```java
public java.lang.String getTlsCertificateKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMysql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---


### DatabaseSecretBackendConnectionMysqlRdsOutputReference <a name="DatabaseSecretBackendConnectionMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionMysqlRdsOutputReference;

new DatabaseSecretBackendConnectionMysqlRdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionMysqlRds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---


### DatabaseSecretBackendConnectionOracleOutputReference <a name="DatabaseSecretBackendConnectionOracleOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionOracleOutputReference;

new DatabaseSecretBackendConnectionOracleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionOracle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---


### DatabaseSecretBackendConnectionPostgresqlOutputReference <a name="DatabaseSecretBackendConnectionPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionPostgresqlOutputReference;

new DatabaseSecretBackendConnectionPostgresqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping"></a>

```java
public void resetDisableEscaping()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson"></a>

```java
public void resetServiceAccountJson()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput"></a>

```java
public java.lang.Object getDisableEscapingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```java
public java.lang.String getServiceAccountJsonInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson"></a>

```java
public java.lang.String getServiceAccountJson();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionPostgresql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---


### DatabaseSecretBackendConnectionRedisElasticacheOutputReference <a name="DatabaseSecretBackendConnectionRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference;

new DatabaseSecretBackendConnectionRedisElasticacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionRedisElasticache getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---


### DatabaseSecretBackendConnectionRedisOutputReference <a name="DatabaseSecretBackendConnectionRedisOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedisOutputReference;

new DatabaseSecretBackendConnectionRedisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert"></a>

```java
public void resetCaCert()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput">caCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput">tlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert">caCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls">tls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput"></a>

```java
public java.lang.String getCaCertInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionRedis getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---


### DatabaseSecretBackendConnectionRedshiftOutputReference <a name="DatabaseSecretBackendConnectionRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionRedshiftOutputReference;

new DatabaseSecretBackendConnectionRedshiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping"></a>

```java
public void resetDisableEscaping()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput"></a>

```java
public java.lang.Object getDisableEscapingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping"></a>

```java
public java.lang.Object getDisableEscaping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionRedshift getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---


### DatabaseSecretBackendConnectionSnowflakeOutputReference <a name="DatabaseSecretBackendConnectionSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.database_secret_backend_connection.DatabaseSecretBackendConnectionSnowflakeOutputReference;

new DatabaseSecretBackendConnectionSnowflakeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue"></a>

```java
public DatabaseSecretBackendConnectionSnowflake getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---



