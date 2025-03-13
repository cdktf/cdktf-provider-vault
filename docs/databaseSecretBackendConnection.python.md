# `databaseSecretBackendConnection` Submodule <a name="`databaseSecretBackendConnection` Submodule" id="@cdktf/provider-vault.databaseSecretBackendConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendConnection <a name="DatabaseSecretBackendConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  allowed_roles: typing.List[str] = None,
  cassandra: DatabaseSecretBackendConnectionCassandra = None,
  couchbase: DatabaseSecretBackendConnectionCouchbase = None,
  data: typing.Mapping[str] = None,
  disable_automated_rotation: typing.Union[bool, IResolvable] = None,
  elasticsearch: DatabaseSecretBackendConnectionElasticsearch = None,
  hana: DatabaseSecretBackendConnectionHana = None,
  id: str = None,
  influxdb: DatabaseSecretBackendConnectionInfluxdb = None,
  mongodb: DatabaseSecretBackendConnectionMongodb = None,
  mongodbatlas: DatabaseSecretBackendConnectionMongodbatlas = None,
  mssql: DatabaseSecretBackendConnectionMssql = None,
  mysql: DatabaseSecretBackendConnectionMysql = None,
  mysql_aurora: DatabaseSecretBackendConnectionMysqlAurora = None,
  mysql_legacy: DatabaseSecretBackendConnectionMysqlLegacy = None,
  mysql_rds: DatabaseSecretBackendConnectionMysqlRds = None,
  namespace: str = None,
  oracle: DatabaseSecretBackendConnectionOracle = None,
  plugin_name: str = None,
  postgresql: DatabaseSecretBackendConnectionPostgresql = None,
  redis: DatabaseSecretBackendConnectionRedis = None,
  redis_elasticache: DatabaseSecretBackendConnectionRedisElasticache = None,
  redshift: DatabaseSecretBackendConnectionRedshift = None,
  root_rotation_statements: typing.List[str] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  snowflake: DatabaseSecretBackendConnectionSnowflake = None,
  verify_connection: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.data">data</a></code> | <code>typing.Mapping[str]</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlAurora">mysql_aurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlLegacy">mysql_legacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlRds">mysql_rds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.pluginName">plugin_name</a></code> | <code>str</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redisElasticache">redis_elasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rootRotationStatements">root_rotation_statements</a></code> | <code>typing.List[str]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the connection is verified during initial configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.name"></a>

- *Type:* str

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.cassandra"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.couchbase"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.data"></a>

- *Type:* typing.Mapping[str]

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_automated_rotation DatabaseSecretBackendConnection#disable_automated_rotation}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.elasticsearch"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.hana"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.influxdb"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodb"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mongodbatlas"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mssql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `mysql_aurora`<sup>Optional</sup> <a name="mysql_aurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlAurora"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `mysql_legacy`<sup>Optional</sup> <a name="mysql_legacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlLegacy"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `mysql_rds`<sup>Optional</sup> <a name="mysql_rds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.mysqlRds"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.oracle"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.pluginName"></a>

- *Type:* str

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redis"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `redis_elasticache`<sup>Optional</sup> <a name="redis_elasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redisElasticache"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.redshift"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `root_rotation_statements`<sup>Optional</sup> <a name="root_rotation_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rootRotationStatements"></a>

- *Type:* typing.List[str]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_period DatabaseSecretBackendConnection#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationSchedule"></a>

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_schedule DatabaseSecretBackendConnection#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.rotationWindow"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_window DatabaseSecretBackendConnection#rotation_window}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.snowflake"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.verifyConnection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra">put_cassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase">put_couchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch">put_elasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana">put_hana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb">put_influxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb">put_mongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas">put_mongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql">put_mssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql">put_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora">put_mysql_aurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy">put_mysql_legacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds">put_mysql_rds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle">put_oracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql">put_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis">put_redis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache">put_redis_elasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift">put_redshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake">put_snowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra">reset_cassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase">reset_couchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetDisableAutomatedRotation">reset_disable_automated_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch">reset_elasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana">reset_hana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb">reset_influxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb">reset_mongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas">reset_mongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql">reset_mssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql">reset_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora">reset_mysql_aurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy">reset_mysql_legacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds">reset_mysql_rds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle">reset_oracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName">reset_plugin_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql">reset_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis">reset_redis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache">reset_redis_elasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift">reset_redshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements">reset_root_rotation_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationSchedule">reset_rotation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationWindow">reset_rotation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake">reset_snowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection">reset_verify_connection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cassandra` <a name="put_cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra"></a>

```python
def put_cassandra(
  connect_timeout: typing.Union[int, float] = None,
  hosts: typing.List[str] = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  password: str = None,
  pem_bundle: str = None,
  pem_json: str = None,
  port: typing.Union[int, float] = None,
  protocol_version: typing.Union[int, float] = None,
  skip_verification: typing.Union[bool, IResolvable] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username: str = None
) -> None
```

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

###### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.hosts"></a>

- *Type:* typing.List[str]

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

###### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.password"></a>

- *Type:* str

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `pem_bundle`<sup>Optional</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.pemBundle"></a>

- *Type:* str

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

###### `pem_json`<sup>Optional</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.pemJson"></a>

- *Type:* str

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.port"></a>

- *Type:* typing.Union[int, float]

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

###### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.protocolVersion"></a>

- *Type:* typing.Union[int, float]

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}

---

###### `skip_verification`<sup>Optional</sup> <a name="skip_verification" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.skipVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip permissions checks when a connection to Cassandra is first created.

These checks ensure that Vault is able to create roles, but can be resource intensive in clusters with many roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#skip_verification DatabaseSecretBackendConnection#skip_verification}

---

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.username"></a>

- *Type:* str

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `put_couchbase` <a name="put_couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase"></a>

```python
def put_couchbase(
  hosts: typing.List[str],
  password: str,
  username: str,
  base64_pem: str = None,
  bucket_name: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username_template: str = None
) -> None
```

###### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.hosts"></a>

- *Type:* typing.List[str]

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.password"></a>

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.username"></a>

- *Type:* str

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `base64_pem`<sup>Optional</sup> <a name="base64_pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.base64Pem"></a>

- *Type:* str

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.bucketName"></a>

- *Type:* str

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}

---

###### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.usernameTemplate"></a>

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_elasticsearch` <a name="put_elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch"></a>

```python
def put_elasticsearch(
  password: str,
  url: str,
  username: str,
  ca_cert: str = None,
  ca_path: str = None,
  client_cert: str = None,
  client_key: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  tls_server_name: str = None,
  username_template: str = None
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.password"></a>

- *Type:* str

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.url"></a>

- *Type:* str

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.username"></a>

- *Type:* str

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.caCert"></a>

- *Type:* str

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

###### `ca_path`<sup>Optional</sup> <a name="ca_path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.caPath"></a>

- *Type:* str

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}

---

###### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.clientCert"></a>

- *Type:* str

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.clientKey"></a>

- *Type:* str

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}

---

###### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}

---

###### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.tlsServerName"></a>

- *Type:* str

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.usernameTemplate"></a>

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_hana` <a name="put_hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana"></a>

```python
def put_hana(
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.disableEscaping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `put_influxdb` <a name="put_influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb"></a>

```python
def put_influxdb(
  host: str,
  password: str,
  username: str,
  connect_timeout: typing.Union[int, float] = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  pem_bundle: str = None,
  pem_json: str = None,
  port: typing.Union[int, float] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username_template: str = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.host"></a>

- *Type:* str

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.password"></a>

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.username"></a>

- *Type:* str

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

###### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

###### `pem_bundle`<sup>Optional</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.pemBundle"></a>

- *Type:* str

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

###### `pem_json`<sup>Optional</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.pemJson"></a>

- *Type:* str

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.port"></a>

- *Type:* typing.Union[int, float]

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.usernameTemplate"></a>

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mongodb` <a name="put_mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb"></a>

```python
def put_mongodb(
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mongodbatlas` <a name="put_mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas"></a>

```python
def put_mongodbatlas(
  private_key: str,
  project_id: str,
  public_key: str
) -> None
```

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.privateKey"></a>

- *Type:* str

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.projectId"></a>

- *Type:* str

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}

---

###### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.publicKey"></a>

- *Type:* str

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}

---

##### `put_mssql` <a name="put_mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql"></a>

```python
def put_mssql(
  connection_url: str = None,
  contained_db: typing.Union[bool, IResolvable] = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `contained_db`<sup>Optional</sup> <a name="contained_db" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.containedDb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}

---

###### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.disableEscaping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mysql` <a name="put_mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql"></a>

```python
def put_mysql(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.authType"></a>

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.serviceAccountJson"></a>

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

###### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.tlsCa"></a>

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

###### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.tlsCertificateKey"></a>

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mysql_aurora` <a name="put_mysql_aurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora"></a>

```python
def put_mysql_aurora(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.authType"></a>

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.serviceAccountJson"></a>

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

###### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.tlsCa"></a>

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

###### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.tlsCertificateKey"></a>

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mysql_legacy` <a name="put_mysql_legacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy"></a>

```python
def put_mysql_legacy(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.authType"></a>

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.serviceAccountJson"></a>

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

###### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.tlsCa"></a>

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

###### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.tlsCertificateKey"></a>

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_mysql_rds` <a name="put_mysql_rds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds"></a>

```python
def put_mysql_rds(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.authType"></a>

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.serviceAccountJson"></a>

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

###### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.tlsCa"></a>

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

###### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.tlsCertificateKey"></a>

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_oracle` <a name="put_oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle"></a>

```python
def put_oracle(
  connection_url: str = None,
  disconnect_sessions: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  split_statements: typing.Union[bool, IResolvable] = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `disconnect_sessions`<sup>Optional</sup> <a name="disconnect_sessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.disconnectSessions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to disconnect any open sessions prior to running the revocation statements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disconnect_sessions DatabaseSecretBackendConnection#disconnect_sessions}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `split_statements`<sup>Optional</sup> <a name="split_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.splitStatements"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true in order to split statements after semi-colons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#split_statements DatabaseSecretBackendConnection#split_statements}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_postgresql` <a name="put_postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql"></a>

```python
def put_postgresql(
  auth_type: str = None,
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  password_authentication: str = None,
  private_key: str = None,
  self_managed: typing.Union[bool, IResolvable] = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.authType"></a>

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.disableEscaping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `password_authentication`<sup>Optional</sup> <a name="password_authentication" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.passwordAuthentication"></a>

- *Type:* str

When set to `scram-sha-256`, passwords will be hashed by Vault before being sent to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password_authentication DatabaseSecretBackendConnection#password_authentication}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.privateKey"></a>

- *Type:* str

The secret key used for the x509 client certificate. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

###### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.selfManaged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, allows onboarding static roles with a rootless connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#self_managed DatabaseSecretBackendConnection#self_managed}

---

###### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.serviceAccountJson"></a>

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

###### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.tlsCa"></a>

- *Type:* str

The x509 CA file for validating the certificate presented by the PostgreSQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

###### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.tlsCertificate"></a>

- *Type:* str

The x509 client certificate for connecting to the database. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate DatabaseSecretBackendConnection#tls_certificate}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_redis` <a name="put_redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis"></a>

```python
def put_redis(
  host: str,
  password: str,
  username: str,
  ca_cert: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  tls: typing.Union[bool, IResolvable] = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.host"></a>

- *Type:* str

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.password"></a>

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.username"></a>

- *Type:* str

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.caCert"></a>

- *Type:* str

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

###### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.port"></a>

- *Type:* typing.Union[int, float]

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `put_redis_elasticache` <a name="put_redis_elasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache"></a>

```python
def put_redis_elasticache(
  url: str,
  password: str = None,
  region: str = None,
  username: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.url"></a>

- *Type:* str

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.password"></a>

- *Type:* str

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.region"></a>

- *Type:* str

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.username"></a>

- *Type:* str

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `put_redshift` <a name="put_redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift"></a>

```python
def put_redshift(
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.disableEscaping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `put_snowflake` <a name="put_snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake"></a>

```python
def put_snowflake(
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
) -> None
```

###### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.connectionUrl"></a>

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

###### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

###### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

###### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.password"></a>

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.username"></a>

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

###### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.usernameTemplate"></a>

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_cassandra` <a name="reset_cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra"></a>

```python
def reset_cassandra() -> None
```

##### `reset_couchbase` <a name="reset_couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase"></a>

```python
def reset_couchbase() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_disable_automated_rotation` <a name="reset_disable_automated_rotation" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetDisableAutomatedRotation"></a>

```python
def reset_disable_automated_rotation() -> None
```

##### `reset_elasticsearch` <a name="reset_elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch"></a>

```python
def reset_elasticsearch() -> None
```

##### `reset_hana` <a name="reset_hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana"></a>

```python
def reset_hana() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_influxdb` <a name="reset_influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb"></a>

```python
def reset_influxdb() -> None
```

##### `reset_mongodb` <a name="reset_mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb"></a>

```python
def reset_mongodb() -> None
```

##### `reset_mongodbatlas` <a name="reset_mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas"></a>

```python
def reset_mongodbatlas() -> None
```

##### `reset_mssql` <a name="reset_mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql"></a>

```python
def reset_mssql() -> None
```

##### `reset_mysql` <a name="reset_mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql"></a>

```python
def reset_mysql() -> None
```

##### `reset_mysql_aurora` <a name="reset_mysql_aurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora"></a>

```python
def reset_mysql_aurora() -> None
```

##### `reset_mysql_legacy` <a name="reset_mysql_legacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy"></a>

```python
def reset_mysql_legacy() -> None
```

##### `reset_mysql_rds` <a name="reset_mysql_rds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds"></a>

```python
def reset_mysql_rds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_oracle` <a name="reset_oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle"></a>

```python
def reset_oracle() -> None
```

##### `reset_plugin_name` <a name="reset_plugin_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName"></a>

```python
def reset_plugin_name() -> None
```

##### `reset_postgresql` <a name="reset_postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql"></a>

```python
def reset_postgresql() -> None
```

##### `reset_redis` <a name="reset_redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis"></a>

```python
def reset_redis() -> None
```

##### `reset_redis_elasticache` <a name="reset_redis_elasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache"></a>

```python
def reset_redis_elasticache() -> None
```

##### `reset_redshift` <a name="reset_redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift"></a>

```python
def reset_redshift() -> None
```

##### `reset_root_rotation_statements` <a name="reset_root_rotation_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements"></a>

```python
def reset_root_rotation_statements() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_rotation_schedule` <a name="reset_rotation_schedule" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationSchedule"></a>

```python
def reset_rotation_schedule() -> None
```

##### `reset_rotation_window` <a name="reset_rotation_window" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRotationWindow"></a>

```python
def reset_rotation_window() -> None
```

##### `reset_snowflake` <a name="reset_snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake"></a>

```python
def reset_snowflake() -> None
```

##### `reset_verify_connection` <a name="reset_verify_connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection"></a>

```python
def reset_verify_connection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnection.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseSecretBackendConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseSecretBackendConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora">mysql_aurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy">mysql_legacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds">mysql_rds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache">redis_elasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput">cassandra_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput">couchbase_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput">data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.disableAutomatedRotationInput">disable_automated_rotation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput">elasticsearch_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput">hana_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput">influxdb_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput">mongodbatlas_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput">mongodb_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput">mssql_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput">mysql_aurora_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput">mysql_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput">mysql_legacy_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput">mysql_rds_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput">oracle_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput">plugin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput">postgresql_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput">redis_elasticache_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput">redis_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput">redshift_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput">root_rotation_statements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationScheduleInput">rotation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationWindowInput">rotation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput">snowflake_input</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput">verify_connection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data">data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements">root_rotation_statements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cassandra`<sup>Required</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra"></a>

```python
cassandra: DatabaseSecretBackendConnectionCassandraOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a>

---

##### `couchbase`<sup>Required</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase"></a>

```python
couchbase: DatabaseSecretBackendConnectionCouchbaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch"></a>

```python
elasticsearch: DatabaseSecretBackendConnectionElasticsearchOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a>

---

##### `hana`<sup>Required</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana"></a>

```python
hana: DatabaseSecretBackendConnectionHanaOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a>

---

##### `influxdb`<sup>Required</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb"></a>

```python
influxdb: DatabaseSecretBackendConnectionInfluxdbOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a>

---

##### `mongodb`<sup>Required</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb"></a>

```python
mongodb: DatabaseSecretBackendConnectionMongodbOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a>

---

##### `mongodbatlas`<sup>Required</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas"></a>

```python
mongodbatlas: DatabaseSecretBackendConnectionMongodbatlasOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a>

---

##### `mssql`<sup>Required</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql"></a>

```python
mssql: DatabaseSecretBackendConnectionMssqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql"></a>

```python
mysql: DatabaseSecretBackendConnectionMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a>

---

##### `mysql_aurora`<sup>Required</sup> <a name="mysql_aurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora"></a>

```python
mysql_aurora: DatabaseSecretBackendConnectionMysqlAuroraOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a>

---

##### `mysql_legacy`<sup>Required</sup> <a name="mysql_legacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy"></a>

```python
mysql_legacy: DatabaseSecretBackendConnectionMysqlLegacyOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a>

---

##### `mysql_rds`<sup>Required</sup> <a name="mysql_rds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds"></a>

```python
mysql_rds: DatabaseSecretBackendConnectionMysqlRdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle"></a>

```python
oracle: DatabaseSecretBackendConnectionOracleOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql"></a>

```python
postgresql: DatabaseSecretBackendConnectionPostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis"></a>

```python
redis: DatabaseSecretBackendConnectionRedisOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a>

---

##### `redis_elasticache`<sup>Required</sup> <a name="redis_elasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache"></a>

```python
redis_elasticache: DatabaseSecretBackendConnectionRedisElasticacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift"></a>

```python
redshift: DatabaseSecretBackendConnectionRedshiftOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake"></a>

```python
snowflake: DatabaseSecretBackendConnectionSnowflakeOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a>

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cassandra_input`<sup>Optional</sup> <a name="cassandra_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput"></a>

```python
cassandra_input: DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `couchbase_input`<sup>Optional</sup> <a name="couchbase_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput"></a>

```python
couchbase_input: DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput"></a>

```python
data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation_input`<sup>Optional</sup> <a name="disable_automated_rotation_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.disableAutomatedRotationInput"></a>

```python
disable_automated_rotation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_input`<sup>Optional</sup> <a name="elasticsearch_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput"></a>

```python
elasticsearch_input: DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `hana_input`<sup>Optional</sup> <a name="hana_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput"></a>

```python
hana_input: DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `influxdb_input`<sup>Optional</sup> <a name="influxdb_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput"></a>

```python
influxdb_input: DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `mongodbatlas_input`<sup>Optional</sup> <a name="mongodbatlas_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput"></a>

```python
mongodbatlas_input: DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `mongodb_input`<sup>Optional</sup> <a name="mongodb_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput"></a>

```python
mongodb_input: DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `mssql_input`<sup>Optional</sup> <a name="mssql_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput"></a>

```python
mssql_input: DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `mysql_aurora_input`<sup>Optional</sup> <a name="mysql_aurora_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput"></a>

```python
mysql_aurora_input: DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `mysql_input`<sup>Optional</sup> <a name="mysql_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput"></a>

```python
mysql_input: DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `mysql_legacy_input`<sup>Optional</sup> <a name="mysql_legacy_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput"></a>

```python
mysql_legacy_input: DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `mysql_rds_input`<sup>Optional</sup> <a name="mysql_rds_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput"></a>

```python
mysql_rds_input: DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `oracle_input`<sup>Optional</sup> <a name="oracle_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput"></a>

```python
oracle_input: DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `plugin_name_input`<sup>Optional</sup> <a name="plugin_name_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput"></a>

```python
plugin_name_input: str
```

- *Type:* str

---

##### `postgresql_input`<sup>Optional</sup> <a name="postgresql_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput"></a>

```python
postgresql_input: DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `redis_elasticache_input`<sup>Optional</sup> <a name="redis_elasticache_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput"></a>

```python
redis_elasticache_input: DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `redis_input`<sup>Optional</sup> <a name="redis_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput"></a>

```python
redis_input: DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `redshift_input`<sup>Optional</sup> <a name="redshift_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput"></a>

```python
redshift_input: DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `root_rotation_statements_input`<sup>Optional</sup> <a name="root_rotation_statements_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput"></a>

```python
root_rotation_statements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_input`<sup>Optional</sup> <a name="rotation_schedule_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationScheduleInput"></a>

```python
rotation_schedule_input: str
```

- *Type:* str

---

##### `rotation_window_input`<sup>Optional</sup> <a name="rotation_window_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationWindowInput"></a>

```python
rotation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snowflake_input`<sup>Optional</sup> <a name="snowflake_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput"></a>

```python
snowflake_input: DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `verify_connection_input`<sup>Optional</sup> <a name="verify_connection_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput"></a>

```python
verify_connection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation`<sup>Required</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `root_rotation_statements`<sup>Required</sup> <a name="root_rotation_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements"></a>

```python
root_rotation_statements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule`<sup>Required</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

---

##### `rotation_window`<sup>Required</sup> <a name="rotation_window" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_connection`<sup>Required</sup> <a name="verify_connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection"></a>

```python
verify_connection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendConnectionCassandra <a name="DatabaseSecretBackendConnectionCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra(
  connect_timeout: typing.Union[int, float] = None,
  hosts: typing.List[str] = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  password: str = None,
  pem_bundle: str = None,
  pem_json: str = None,
  port: typing.Union[int, float] = None,
  protocol_version: typing.Union[int, float] = None,
  skip_verification: typing.Union[bool, IResolvable] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password">password</a></code> | <code>str</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle">pem_bundle</a></code> | <code>str</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson">pem_json</a></code> | <code>str</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion">protocol_version</a></code> | <code>typing.Union[int, float]</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.skipVerification">skip_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip permissions checks when a connection to Cassandra is first created. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username">username</a></code> | <code>str</code> | The username to use when authenticating with Cassandra. |

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password"></a>

```python
password: str
```

- *Type:* str

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `pem_bundle`<sup>Optional</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle"></a>

```python
pem_bundle: str
```

- *Type:* str

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pem_json`<sup>Optional</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson"></a>

```python
pem_json: str
```

- *Type:* str

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion"></a>

```python
protocol_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}

---

##### `skip_verification`<sup>Optional</sup> <a name="skip_verification" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.skipVerification"></a>

```python
skip_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip permissions checks when a connection to Cassandra is first created.

These checks ensure that Vault is able to create roles, but can be resource intensive in clusters with many roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#skip_verification DatabaseSecretBackendConnection#skip_verification}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionConfig <a name="DatabaseSecretBackendConnectionConfig" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  allowed_roles: typing.List[str] = None,
  cassandra: DatabaseSecretBackendConnectionCassandra = None,
  couchbase: DatabaseSecretBackendConnectionCouchbase = None,
  data: typing.Mapping[str] = None,
  disable_automated_rotation: typing.Union[bool, IResolvable] = None,
  elasticsearch: DatabaseSecretBackendConnectionElasticsearch = None,
  hana: DatabaseSecretBackendConnectionHana = None,
  id: str = None,
  influxdb: DatabaseSecretBackendConnectionInfluxdb = None,
  mongodb: DatabaseSecretBackendConnectionMongodb = None,
  mongodbatlas: DatabaseSecretBackendConnectionMongodbatlas = None,
  mssql: DatabaseSecretBackendConnectionMssql = None,
  mysql: DatabaseSecretBackendConnectionMysql = None,
  mysql_aurora: DatabaseSecretBackendConnectionMysqlAurora = None,
  mysql_legacy: DatabaseSecretBackendConnectionMysqlLegacy = None,
  mysql_rds: DatabaseSecretBackendConnectionMysqlRds = None,
  namespace: str = None,
  oracle: DatabaseSecretBackendConnectionOracle = None,
  plugin_name: str = None,
  postgresql: DatabaseSecretBackendConnectionPostgresql = None,
  redis: DatabaseSecretBackendConnectionRedis = None,
  redis_elasticache: DatabaseSecretBackendConnectionRedisElasticache = None,
  redshift: DatabaseSecretBackendConnectionRedshift = None,
  root_rotation_statements: typing.List[str] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  snowflake: DatabaseSecretBackendConnectionSnowflake = None,
  verify_connection: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name">name</a></code> | <code>str</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data">data</a></code> | <code>typing.Mapping[str]</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora">mysql_aurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy">mysql_legacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds">mysql_rds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName">plugin_name</a></code> | <code>str</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache">redis_elasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements">root_rotation_statements</a></code> | <code>typing.List[str]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection">verify_connection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the connection is verified during initial configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra"></a>

```python
cassandra: DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase"></a>

```python
couchbase: DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_automated_rotation DatabaseSecretBackendConnection#disable_automated_rotation}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch"></a>

```python
elasticsearch: DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana"></a>

```python
hana: DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb"></a>

```python
influxdb: DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb"></a>

```python
mongodb: DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas"></a>

```python
mongodbatlas: DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql"></a>

```python
mssql: DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql"></a>

```python
mysql: DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `mysql_aurora`<sup>Optional</sup> <a name="mysql_aurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora"></a>

```python
mysql_aurora: DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `mysql_legacy`<sup>Optional</sup> <a name="mysql_legacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy"></a>

```python
mysql_legacy: DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `mysql_rds`<sup>Optional</sup> <a name="mysql_rds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds"></a>

```python
mysql_rds: DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle"></a>

```python
oracle: DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql"></a>

```python
postgresql: DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis"></a>

```python
redis: DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `redis_elasticache`<sup>Optional</sup> <a name="redis_elasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache"></a>

```python
redis_elasticache: DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift"></a>

```python
redshift: DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `root_rotation_statements`<sup>Optional</sup> <a name="root_rotation_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements"></a>

```python
root_rotation_statements: typing.List[str]
```

- *Type:* typing.List[str]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_period DatabaseSecretBackendConnection#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_schedule DatabaseSecretBackendConnection#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#rotation_window DatabaseSecretBackendConnection#rotation_window}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake"></a>

```python
snowflake: DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection"></a>

```python
verify_connection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

### DatabaseSecretBackendConnectionCouchbase <a name="DatabaseSecretBackendConnectionCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase(
  hosts: typing.List[str],
  password: str,
  username: str,
  base64_pem: str = None,
  bucket_name: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password">password</a></code> | <code>str</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username">username</a></code> | <code>str</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem">base64_pem</a></code> | <code>str</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName">bucket_name</a></code> | <code>str</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password"></a>

```python
password: str
```

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `base64_pem`<sup>Optional</sup> <a name="base64_pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem"></a>

```python
base64_pem: str
```

- *Type:* str

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionElasticsearch <a name="DatabaseSecretBackendConnectionElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch(
  password: str,
  url: str,
  username: str,
  ca_cert: str = None,
  ca_path: str = None,
  client_cert: str = None,
  client_key: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  tls_server_name: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password">password</a></code> | <code>str</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url">url</a></code> | <code>str</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username">username</a></code> | <code>str</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert">ca_cert</a></code> | <code>str</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath">ca_path</a></code> | <code>str</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert">client_cert</a></code> | <code>str</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey">client_key</a></code> | <code>str</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password"></a>

```python
password: str
```

- *Type:* str

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url"></a>

```python
url: str
```

- *Type:* str

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username"></a>

```python
username: str
```

- *Type:* str

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `ca_path`<sup>Optional</sup> <a name="ca_path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath"></a>

```python
ca_path: str
```

- *Type:* str

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}

---

##### `client_cert`<sup>Optional</sup> <a name="client_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionHana <a name="DatabaseSecretBackendConnectionHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana(
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionInfluxdb <a name="DatabaseSecretBackendConnectionInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb(
  host: str,
  password: str,
  username: str,
  connect_timeout: typing.Union[int, float] = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  pem_bundle: str = None,
  pem_json: str = None,
  port: typing.Union[int, float] = None,
  tls: typing.Union[bool, IResolvable] = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host">host</a></code> | <code>str</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password">password</a></code> | <code>str</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username">username</a></code> | <code>str</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle">pem_bundle</a></code> | <code>str</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson">pem_json</a></code> | <code>str</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host"></a>

```python
host: str
```

- *Type:* str

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password"></a>

```python
password: str
```

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `pem_bundle`<sup>Optional</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle"></a>

```python
pem_bundle: str
```

- *Type:* str

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pem_json`<sup>Optional</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson"></a>

```python
pem_json: str
```

- *Type:* str

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodb <a name="DatabaseSecretBackendConnectionMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb(
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodbatlas <a name="DatabaseSecretBackendConnectionMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas(
  private_key: str,
  project_id: str,
  public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey">private_key</a></code> | <code>str</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId">project_id</a></code> | <code>str</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey">public_key</a></code> | <code>str</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}

---

### DatabaseSecretBackendConnectionMssql <a name="DatabaseSecretBackendConnectionMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql(
  connection_url: str = None,
  contained_db: typing.Union[bool, IResolvable] = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb">contained_db</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `contained_db`<sup>Optional</sup> <a name="contained_db" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb"></a>

```python
contained_db: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}

---

##### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysql <a name="DatabaseSecretBackendConnectionMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType">auth_type</a></code> | <code>str</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa">tls_ca</a></code> | <code>str</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlAurora <a name="DatabaseSecretBackendConnectionMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.authType">auth_type</a></code> | <code>str</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCa">tls_ca</a></code> | <code>str</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlLegacy <a name="DatabaseSecretBackendConnectionMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.authType">auth_type</a></code> | <code>str</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCa">tls_ca</a></code> | <code>str</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlRds <a name="DatabaseSecretBackendConnectionMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds(
  auth_type: str = None,
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate_key: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.authType">auth_type</a></code> | <code>str</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCa">tls_ca</a></code> | <code>str</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tls_certificate_key`<sup>Optional</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionOracle <a name="DatabaseSecretBackendConnectionOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle(
  connection_url: str = None,
  disconnect_sessions: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  split_statements: typing.Union[bool, IResolvable] = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.disconnectSessions">disconnect_sessions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to disconnect any open sessions prior to running the revocation statements. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.splitStatements">split_statements</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true in order to split statements after semi-colons. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disconnect_sessions`<sup>Optional</sup> <a name="disconnect_sessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.disconnectSessions"></a>

```python
disconnect_sessions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to disconnect any open sessions prior to running the revocation statements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disconnect_sessions DatabaseSecretBackendConnection#disconnect_sessions}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `split_statements`<sup>Optional</sup> <a name="split_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.splitStatements"></a>

```python
split_statements: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true in order to split statements after semi-colons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#split_statements DatabaseSecretBackendConnection#split_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionPostgresql <a name="DatabaseSecretBackendConnectionPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql(
  auth_type: str = None,
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  password_authentication: str = None,
  private_key: str = None,
  self_managed: typing.Union[bool, IResolvable] = None,
  service_account_json: str = None,
  tls_ca: str = None,
  tls_certificate: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType">auth_type</a></code> | <code>str</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.passwordAuthentication">password_authentication</a></code> | <code>str</code> | When set to `scram-sha-256`, passwords will be hashed by Vault before being sent to PostgreSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.privateKey">private_key</a></code> | <code>str</code> | The secret key used for the x509 client certificate. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.selfManaged">self_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, allows onboarding static roles with a rootless connection configuration. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.tlsCa">tls_ca</a></code> | <code>str</code> | The x509 CA file for validating the certificate presented by the PostgreSQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | The x509 client certificate for connecting to the database. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `password_authentication`<sup>Optional</sup> <a name="password_authentication" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.passwordAuthentication"></a>

```python
password_authentication: str
```

- *Type:* str

When set to `scram-sha-256`, passwords will be hashed by Vault before being sent to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password_authentication DatabaseSecretBackendConnection#password_authentication}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The secret key used for the x509 client certificate. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.selfManaged"></a>

```python
self_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, allows onboarding static roles with a rootless connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#self_managed DatabaseSecretBackendConnection#self_managed}

---

##### `service_account_json`<sup>Optional</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tls_ca`<sup>Optional</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

The x509 CA file for validating the certificate presented by the PostgreSQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

The x509 client certificate for connecting to the database. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls_certificate DatabaseSecretBackendConnection#tls_certificate}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionRedis <a name="DatabaseSecretBackendConnectionRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis(
  host: str,
  password: str,
  username: str,
  ca_cert: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  tls: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host">host</a></code> | <code>str</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password">password</a></code> | <code>str</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username">username</a></code> | <code>str</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert">ca_cert</a></code> | <code>str</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use TLS when connecting to Redis. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host"></a>

```python
host: str
```

- *Type:* str

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password"></a>

```python
password: str
```

- *Type:* str

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

### DatabaseSecretBackendConnectionRedisElasticache <a name="DatabaseSecretBackendConnectionRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache(
  url: str,
  password: str = None,
  region: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url">url</a></code> | <code>str</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password">password</a></code> | <code>str</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region">region</a></code> | <code>str</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username">username</a></code> | <code>str</code> | The AWS access key id to use to talk to ElastiCache. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url"></a>

```python
url: str
```

- *Type:* str

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password"></a>

```python
password: str
```

- *Type:* str

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username"></a>

```python
username: str
```

- *Type:* str

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionRedshift <a name="DatabaseSecretBackendConnectionRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift(
  connection_url: str = None,
  disable_escaping: typing.Union[bool, IResolvable] = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disable_escaping`<sup>Optional</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionSnowflake <a name="DatabaseSecretBackendConnectionSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake(
  connection_url: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  password: str = None,
  username: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl">connection_url</a></code> | <code>str</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password">password</a></code> | <code>str</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username">username</a></code> | <code>str</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate">username_template</a></code> | <code>str</code> | Username generation template. |

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password"></a>

```python
password: str
```

- *Type:* str

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username"></a>

```python
username: str
```

- *Type:* str

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretBackendConnectionCassandraOutputReference <a name="DatabaseSecretBackendConnectionCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle">reset_pem_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson">reset_pem_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion">reset_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetSkipVerification">reset_skip_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls">reset_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_pem_bundle` <a name="reset_pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle"></a>

```python
def reset_pem_bundle() -> None
```

##### `reset_pem_json` <a name="reset_pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson"></a>

```python
def reset_pem_json() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol_version` <a name="reset_protocol_version" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion"></a>

```python
def reset_protocol_version() -> None
```

##### `reset_skip_verification` <a name="reset_skip_verification" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetSkipVerification"></a>

```python
def reset_skip_verification() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput">pem_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput">pem_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.skipVerificationInput">skip_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle">pem_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson">pem_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion">protocol_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.skipVerification">skip_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `pem_bundle_input`<sup>Optional</sup> <a name="pem_bundle_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput"></a>

```python
pem_bundle_input: str
```

- *Type:* str

---

##### `pem_json_input`<sup>Optional</sup> <a name="pem_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput"></a>

```python
pem_json_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_verification_input`<sup>Optional</sup> <a name="skip_verification_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.skipVerificationInput"></a>

```python
skip_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `pem_bundle`<sup>Required</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle"></a>

```python
pem_bundle: str
```

- *Type:* str

---

##### `pem_json`<sup>Required</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson"></a>

```python
pem_json: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion"></a>

```python
protocol_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_verification`<sup>Required</sup> <a name="skip_verification" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.skipVerification"></a>

```python
skip_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionCassandra
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---


### DatabaseSecretBackendConnectionCouchbaseOutputReference <a name="DatabaseSecretBackendConnectionCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem">reset_base64_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls">reset_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base64_pem` <a name="reset_base64_pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem"></a>

```python
def reset_base64_pem() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput">base64_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem">base64_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base64_pem_input`<sup>Optional</sup> <a name="base64_pem_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput"></a>

```python
base64_pem_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `base64_pem`<sup>Required</sup> <a name="base64_pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem"></a>

```python
base64_pem: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionCouchbase
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---


### DatabaseSecretBackendConnectionElasticsearchOutputReference <a name="DatabaseSecretBackendConnectionElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert">reset_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath">reset_ca_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert">reset_client_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName">reset_tls_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```

##### `reset_ca_path` <a name="reset_ca_path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath"></a>

```python
def reset_ca_path() -> None
```

##### `reset_client_cert` <a name="reset_client_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert"></a>

```python
def reset_client_cert() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_tls_server_name` <a name="reset_tls_server_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName"></a>

```python
def reset_tls_server_name() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput">ca_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput">client_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput">tls_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath">ca_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert">client_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `ca_path_input`<sup>Optional</sup> <a name="ca_path_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput"></a>

```python
ca_path_input: str
```

- *Type:* str

---

##### `client_cert_input`<sup>Optional</sup> <a name="client_cert_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput"></a>

```python
client_cert_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `tls_server_name_input`<sup>Optional</sup> <a name="tls_server_name_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput"></a>

```python
tls_server_name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `ca_path`<sup>Required</sup> <a name="ca_path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath"></a>

```python
ca_path: str
```

- *Type:* str

---

##### `client_cert`<sup>Required</sup> <a name="client_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert"></a>

```python
client_cert: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `tls_server_name`<sup>Required</sup> <a name="tls_server_name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionElasticsearch
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---


### DatabaseSecretBackendConnectionHanaOutputReference <a name="DatabaseSecretBackendConnectionHanaOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping">reset_disable_escaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_disable_escaping` <a name="reset_disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping"></a>

```python
def reset_disable_escaping() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput">disable_escaping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `disable_escaping_input`<sup>Optional</sup> <a name="disable_escaping_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput"></a>

```python
disable_escaping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `disable_escaping`<sup>Required</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionHana
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---


### DatabaseSecretBackendConnectionInfluxdbOutputReference <a name="DatabaseSecretBackendConnectionInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle">reset_pem_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson">reset_pem_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls">reset_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_pem_bundle` <a name="reset_pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle"></a>

```python
def reset_pem_bundle() -> None
```

##### `reset_pem_json` <a name="reset_pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson"></a>

```python
def reset_pem_json() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput">pem_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput">pem_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle">pem_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson">pem_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `pem_bundle_input`<sup>Optional</sup> <a name="pem_bundle_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput"></a>

```python
pem_bundle_input: str
```

- *Type:* str

---

##### `pem_json_input`<sup>Optional</sup> <a name="pem_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput"></a>

```python
pem_json_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `pem_bundle`<sup>Required</sup> <a name="pem_bundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle"></a>

```python
pem_bundle: str
```

- *Type:* str

---

##### `pem_json`<sup>Required</sup> <a name="pem_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson"></a>

```python
pem_json: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionInfluxdb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---


### DatabaseSecretBackendConnectionMongodbatlasOutputReference <a name="DatabaseSecretBackendConnectionMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMongodbatlas
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---


### DatabaseSecretBackendConnectionMongodbOutputReference <a name="DatabaseSecretBackendConnectionMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMongodb
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---


### DatabaseSecretBackendConnectionMssqlOutputReference <a name="DatabaseSecretBackendConnectionMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb">reset_contained_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping">reset_disable_escaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_contained_db` <a name="reset_contained_db" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb"></a>

```python
def reset_contained_db() -> None
```

##### `reset_disable_escaping` <a name="reset_disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping"></a>

```python
def reset_disable_escaping() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput">contained_db_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput">disable_escaping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb">contained_db</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `contained_db_input`<sup>Optional</sup> <a name="contained_db_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput"></a>

```python
contained_db_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_escaping_input`<sup>Optional</sup> <a name="disable_escaping_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput"></a>

```python
disable_escaping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `contained_db`<sup>Required</sup> <a name="contained_db" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb"></a>

```python
contained_db: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_escaping`<sup>Required</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMssql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---


### DatabaseSecretBackendConnectionMysqlAuroraOutputReference <a name="DatabaseSecretBackendConnectionMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetServiceAccountJson">reset_service_account_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCa">reset_tls_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCertificateKey">reset_tls_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_account_json` <a name="reset_service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetServiceAccountJson"></a>

```python
def reset_service_account_json() -> None
```

##### `reset_tls_ca` <a name="reset_tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCa"></a>

```python
def reset_tls_ca() -> None
```

##### `reset_tls_certificate_key` <a name="reset_tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCertificateKey"></a>

```python
def reset_tls_certificate_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJsonInput">service_account_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCaInput">tls_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKeyInput">tls_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCa">tls_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_account_json_input`<sup>Optional</sup> <a name="service_account_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJsonInput"></a>

```python
service_account_json_input: str
```

- *Type:* str

---

##### `tls_ca_input`<sup>Optional</sup> <a name="tls_ca_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCaInput"></a>

```python
tls_ca_input: str
```

- *Type:* str

---

##### `tls_certificate_key_input`<sup>Optional</sup> <a name="tls_certificate_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKeyInput"></a>

```python
tls_certificate_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_account_json`<sup>Required</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

---

##### `tls_ca`<sup>Required</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

---

##### `tls_certificate_key`<sup>Required</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMysqlAurora
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---


### DatabaseSecretBackendConnectionMysqlLegacyOutputReference <a name="DatabaseSecretBackendConnectionMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetServiceAccountJson">reset_service_account_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCa">reset_tls_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCertificateKey">reset_tls_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_account_json` <a name="reset_service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetServiceAccountJson"></a>

```python
def reset_service_account_json() -> None
```

##### `reset_tls_ca` <a name="reset_tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCa"></a>

```python
def reset_tls_ca() -> None
```

##### `reset_tls_certificate_key` <a name="reset_tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCertificateKey"></a>

```python
def reset_tls_certificate_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJsonInput">service_account_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCaInput">tls_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKeyInput">tls_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCa">tls_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_account_json_input`<sup>Optional</sup> <a name="service_account_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJsonInput"></a>

```python
service_account_json_input: str
```

- *Type:* str

---

##### `tls_ca_input`<sup>Optional</sup> <a name="tls_ca_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCaInput"></a>

```python
tls_ca_input: str
```

- *Type:* str

---

##### `tls_certificate_key_input`<sup>Optional</sup> <a name="tls_certificate_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKeyInput"></a>

```python
tls_certificate_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_account_json`<sup>Required</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

---

##### `tls_ca`<sup>Required</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

---

##### `tls_certificate_key`<sup>Required</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMysqlLegacy
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---


### DatabaseSecretBackendConnectionMysqlOutputReference <a name="DatabaseSecretBackendConnectionMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson">reset_service_account_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa">reset_tls_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey">reset_tls_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_account_json` <a name="reset_service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson"></a>

```python
def reset_service_account_json() -> None
```

##### `reset_tls_ca` <a name="reset_tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa"></a>

```python
def reset_tls_ca() -> None
```

##### `reset_tls_certificate_key` <a name="reset_tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey"></a>

```python
def reset_tls_certificate_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput">service_account_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput">tls_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput">tls_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa">tls_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_account_json_input`<sup>Optional</sup> <a name="service_account_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput"></a>

```python
service_account_json_input: str
```

- *Type:* str

---

##### `tls_ca_input`<sup>Optional</sup> <a name="tls_ca_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput"></a>

```python
tls_ca_input: str
```

- *Type:* str

---

##### `tls_certificate_key_input`<sup>Optional</sup> <a name="tls_certificate_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```python
tls_certificate_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_account_json`<sup>Required</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

---

##### `tls_ca`<sup>Required</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

---

##### `tls_certificate_key`<sup>Required</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMysql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---


### DatabaseSecretBackendConnectionMysqlRdsOutputReference <a name="DatabaseSecretBackendConnectionMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetServiceAccountJson">reset_service_account_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCa">reset_tls_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCertificateKey">reset_tls_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_account_json` <a name="reset_service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetServiceAccountJson"></a>

```python
def reset_service_account_json() -> None
```

##### `reset_tls_ca` <a name="reset_tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCa"></a>

```python
def reset_tls_ca() -> None
```

##### `reset_tls_certificate_key` <a name="reset_tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCertificateKey"></a>

```python
def reset_tls_certificate_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJsonInput">service_account_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCaInput">tls_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKeyInput">tls_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCa">tls_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKey">tls_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_account_json_input`<sup>Optional</sup> <a name="service_account_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJsonInput"></a>

```python
service_account_json_input: str
```

- *Type:* str

---

##### `tls_ca_input`<sup>Optional</sup> <a name="tls_ca_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCaInput"></a>

```python
tls_ca_input: str
```

- *Type:* str

---

##### `tls_certificate_key_input`<sup>Optional</sup> <a name="tls_certificate_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKeyInput"></a>

```python
tls_certificate_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_account_json`<sup>Required</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

---

##### `tls_ca`<sup>Required</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

---

##### `tls_certificate_key`<sup>Required</sup> <a name="tls_certificate_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKey"></a>

```python
tls_certificate_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionMysqlRds
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---


### DatabaseSecretBackendConnectionOracleOutputReference <a name="DatabaseSecretBackendConnectionOracleOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetDisconnectSessions">reset_disconnect_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetSplitStatements">reset_split_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_disconnect_sessions` <a name="reset_disconnect_sessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetDisconnectSessions"></a>

```python
def reset_disconnect_sessions() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_split_statements` <a name="reset_split_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetSplitStatements"></a>

```python
def reset_split_statements() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessionsInput">disconnect_sessions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatementsInput">split_statements_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessions">disconnect_sessions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatements">split_statements</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `disconnect_sessions_input`<sup>Optional</sup> <a name="disconnect_sessions_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessionsInput"></a>

```python
disconnect_sessions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `split_statements_input`<sup>Optional</sup> <a name="split_statements_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatementsInput"></a>

```python
split_statements_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `disconnect_sessions`<sup>Required</sup> <a name="disconnect_sessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessions"></a>

```python
disconnect_sessions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `split_statements`<sup>Required</sup> <a name="split_statements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatements"></a>

```python
split_statements: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionOracle
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---


### DatabaseSecretBackendConnectionPostgresqlOutputReference <a name="DatabaseSecretBackendConnectionPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping">reset_disable_escaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPasswordAuthentication">reset_password_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson">reset_service_account_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetTlsCa">reset_tls_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetTlsCertificate">reset_tls_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_disable_escaping` <a name="reset_disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping"></a>

```python
def reset_disable_escaping() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_authentication` <a name="reset_password_authentication" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPasswordAuthentication"></a>

```python
def reset_password_authentication() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_service_account_json` <a name="reset_service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson"></a>

```python
def reset_service_account_json() -> None
```

##### `reset_tls_ca` <a name="reset_tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetTlsCa"></a>

```python
def reset_tls_ca() -> None
```

##### `reset_tls_certificate` <a name="reset_tls_certificate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetTlsCertificate"></a>

```python
def reset_tls_certificate() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput">disable_escaping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordAuthenticationInput">password_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.selfManagedInput">self_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput">service_account_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCaInput">tls_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCertificateInput">tls_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordAuthentication">password_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.selfManaged">self_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson">service_account_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCa">tls_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `disable_escaping_input`<sup>Optional</sup> <a name="disable_escaping_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput"></a>

```python
disable_escaping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_authentication_input`<sup>Optional</sup> <a name="password_authentication_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordAuthenticationInput"></a>

```python
password_authentication_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.selfManagedInput"></a>

```python
self_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_account_json_input`<sup>Optional</sup> <a name="service_account_json_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```python
service_account_json_input: str
```

- *Type:* str

---

##### `tls_ca_input`<sup>Optional</sup> <a name="tls_ca_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCaInput"></a>

```python
tls_ca_input: str
```

- *Type:* str

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCertificateInput"></a>

```python
tls_certificate_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `disable_escaping`<sup>Required</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_authentication`<sup>Required</sup> <a name="password_authentication" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordAuthentication"></a>

```python
password_authentication: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.selfManaged"></a>

```python
self_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_account_json`<sup>Required</sup> <a name="service_account_json" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson"></a>

```python
service_account_json: str
```

- *Type:* str

---

##### `tls_ca`<sup>Required</sup> <a name="tls_ca" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCa"></a>

```python
tls_ca: str
```

- *Type:* str

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionPostgresql
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---


### DatabaseSecretBackendConnectionRedisElasticacheOutputReference <a name="DatabaseSecretBackendConnectionRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionRedisElasticache
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---


### DatabaseSecretBackendConnectionRedisOutputReference <a name="DatabaseSecretBackendConnectionRedisOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert">reset_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionRedis
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---


### DatabaseSecretBackendConnectionRedshiftOutputReference <a name="DatabaseSecretBackendConnectionRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping">reset_disable_escaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_disable_escaping` <a name="reset_disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping"></a>

```python
def reset_disable_escaping() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput">disable_escaping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping">disable_escaping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `disable_escaping_input`<sup>Optional</sup> <a name="disable_escaping_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput"></a>

```python
disable_escaping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `disable_escaping`<sup>Required</sup> <a name="disable_escaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping"></a>

```python
disable_escaping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionRedshift
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---


### DatabaseSecretBackendConnectionSnowflakeOutputReference <a name="DatabaseSecretBackendConnectionSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_connection

databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_url` <a name="reset_connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSecretBackendConnectionSnowflake
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---



