// https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSecretBackendConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Unique name of the Vault mount to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}
  */
  readonly backend: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
  /**
  * cassandra block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}
  */
  readonly cassandra?: DatabaseSecretBackendConnectionCassandra;
  /**
  * couchbase block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}
  */
  readonly couchbase?: DatabaseSecretBackendConnectionCouchbase;
  /**
  * elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}
  */
  readonly elasticsearch?: DatabaseSecretBackendConnectionElasticsearch;
  /**
  * hana block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}
  */
  readonly hana?: DatabaseSecretBackendConnectionHana;
  /**
  * influxdb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}
  */
  readonly influxdb?: DatabaseSecretBackendConnectionInfluxdb;
  /**
  * mongodb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}
  */
  readonly mongodb?: DatabaseSecretBackendConnectionMongodb;
  /**
  * mongodbatlas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}
  */
  readonly mongodbatlas?: DatabaseSecretBackendConnectionMongodbatlas;
  /**
  * mssql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}
  */
  readonly mssql?: DatabaseSecretBackendConnectionMssql;
  /**
  * mysql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}
  */
  readonly mysql?: DatabaseSecretBackendConnectionMysql;
  /**
  * mysql_aurora block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}
  */
  readonly mysqlAurora?: DatabaseSecretBackendConnectionMysqlAurora;
  /**
  * mysql_legacy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}
  */
  readonly mysqlLegacy?: DatabaseSecretBackendConnectionMysqlLegacy;
  /**
  * mysql_rds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}
  */
  readonly mysqlRds?: DatabaseSecretBackendConnectionMysqlRds;
  /**
  * oracle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}
  */
  readonly oracle?: DatabaseSecretBackendConnectionOracle;
  /**
  * postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}
  */
  readonly postgresql?: DatabaseSecretBackendConnectionPostgresql;
  /**
  * redis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}
  */
  readonly redis?: DatabaseSecretBackendConnectionRedis;
  /**
  * redis_elasticache block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}
  */
  readonly redisElasticache?: DatabaseSecretBackendConnectionRedisElasticache;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}
  */
  readonly redshift?: DatabaseSecretBackendConnectionRedshift;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}
  */
  readonly snowflake?: DatabaseSecretBackendConnectionSnowflake;
}
export interface DatabaseSecretBackendConnectionCassandra {
  /**
  * The number of seconds to use as a connection timeout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Cassandra hosts to connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}
  */
  readonly hosts?: string[];
  /**
  * Whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * The password to use when authenticating with Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}
  */
  readonly pemJson?: string;
  /**
  * The transport port to use to connect to Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * The CQL protocol version to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}
  */
  readonly protocolVersion?: number;
  /**
  * Whether to use TLS when connecting to Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * The username to use when authenticating with Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
}

export function databaseSecretBackendConnectionCassandraToTerraform(struct?: DatabaseSecretBackendConnectionCassandraOutputReference | DatabaseSecretBackendConnectionCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    password: cdktf.stringToTerraform(struct!.password),
    pem_bundle: cdktf.stringToTerraform(struct!.pemBundle),
    pem_json: cdktf.stringToTerraform(struct!.pemJson),
    port: cdktf.numberToTerraform(struct!.port),
    protocol_version: cdktf.numberToTerraform(struct!.protocolVersion),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DatabaseSecretBackendConnectionCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionCassandra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pemBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemBundle = this._pemBundle;
    }
    if (this._pemJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemJson = this._pemJson;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionCassandra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._hosts = undefined;
      this._insecureTls = undefined;
      this._password = undefined;
      this._pemBundle = undefined;
      this._pemJson = undefined;
      this._port = undefined;
      this._protocolVersion = undefined;
      this._tls = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._hosts = value.hosts;
      this._insecureTls = value.insecureTls;
      this._password = value.password;
      this._pemBundle = value.pemBundle;
      this._pemJson = value.pemJson;
      this._port = value.port;
      this._protocolVersion = value.protocolVersion;
      this._tls = value.tls;
      this._username = value.username;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pem_bundle - computed: false, optional: true, required: false
  private _pemBundle?: string; 
  public get pemBundle() {
    return this.getStringAttribute('pem_bundle');
  }
  public set pemBundle(value: string) {
    this._pemBundle = value;
  }
  public resetPemBundle() {
    this._pemBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemBundleInput() {
    return this._pemBundle;
  }

  // pem_json - computed: false, optional: true, required: false
  private _pemJson?: string; 
  public get pemJson() {
    return this.getStringAttribute('pem_json');
  }
  public set pemJson(value: string) {
    this._pemJson = value;
  }
  public resetPemJson() {
    this._pemJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemJsonInput() {
    return this._pemJson;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: number; 
  public get protocolVersion() {
    return this.getNumberAttribute('protocol_version');
  }
  public set protocolVersion(value: number) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseSecretBackendConnectionCouchbase {
  /**
  * Required if `tls` is `true`. Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}
  */
  readonly base64Pem?: string;
  /**
  * Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}
  */
  readonly hosts: string[];
  /**
  *  Specifies whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * Specifies whether to use TLS when connecting to Couchbase.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username for Vault to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionCouchbaseToTerraform(struct?: DatabaseSecretBackendConnectionCouchbaseOutputReference | DatabaseSecretBackendConnectionCouchbase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_pem: cdktf.stringToTerraform(struct!.base64Pem),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    password: cdktf.stringToTerraform(struct!.password),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionCouchbaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionCouchbase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Pem = this._base64Pem;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionCouchbase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base64Pem = undefined;
      this._bucketName = undefined;
      this._hosts = undefined;
      this._insecureTls = undefined;
      this._password = undefined;
      this._tls = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base64Pem = value.base64Pem;
      this._bucketName = value.bucketName;
      this._hosts = value.hosts;
      this._insecureTls = value.insecureTls;
      this._password = value.password;
      this._tls = value.tls;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // base64_pem - computed: false, optional: true, required: false
  private _base64Pem?: string; 
  public get base64Pem() {
    return this.getStringAttribute('base64_pem');
  }
  public set base64Pem(value: string) {
    this._base64Pem = value;
  }
  public resetBase64Pem() {
    this._base64Pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PemInput() {
    return this._base64Pem;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionElasticsearch {
  /**
  * The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}
  */
  readonly caPath?: string;
  /**
  * The path to the certificate for the Elasticsearch client to present for communication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The path to the key for the Elasticsearch client to use for communication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}
  */
  readonly clientKey?: string;
  /**
  * Whether to disable certificate verification
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to be used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * This, if set, is used to set the SNI host when connecting via TLS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * The URL for Elasticsearch's API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}
  */
  readonly url: string;
  /**
  * The username to be used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionElasticsearchToTerraform(struct?: DatabaseSecretBackendConnectionElasticsearchOutputReference | DatabaseSecretBackendConnectionElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecure = undefined;
      this._password = undefined;
      this._tlsServerName = undefined;
      this._url = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecure = value.insecure;
      this._password = value.password;
      this._tlsServerName = value.tlsServerName;
      this._url = value.url;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionHana {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
}

export function databaseSecretBackendConnectionHanaToTerraform(struct?: DatabaseSecretBackendConnectionHanaOutputReference | DatabaseSecretBackendConnectionHana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DatabaseSecretBackendConnectionHanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionHana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionHana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseSecretBackendConnectionInfluxdb {
  /**
  * The number of seconds to use as a connection timeout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Influxdb host to connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}
  */
  readonly host: string;
  /**
  * Whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}
  */
  readonly pemJson?: string;
  /**
  * The transport port to use to connect to Influxdb.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * Whether to use TLS when connecting to Influxdb.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username to use for superuser access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionInfluxdbToTerraform(struct?: DatabaseSecretBackendConnectionInfluxdbOutputReference | DatabaseSecretBackendConnectionInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    host: cdktf.stringToTerraform(struct!.host),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    password: cdktf.stringToTerraform(struct!.password),
    pem_bundle: cdktf.stringToTerraform(struct!.pemBundle),
    pem_json: cdktf.stringToTerraform(struct!.pemJson),
    port: cdktf.numberToTerraform(struct!.port),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionInfluxdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionInfluxdb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pemBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemBundle = this._pemBundle;
    }
    if (this._pemJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemJson = this._pemJson;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionInfluxdb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._host = undefined;
      this._insecureTls = undefined;
      this._password = undefined;
      this._pemBundle = undefined;
      this._pemJson = undefined;
      this._port = undefined;
      this._tls = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._host = value.host;
      this._insecureTls = value.insecureTls;
      this._password = value.password;
      this._pemBundle = value.pemBundle;
      this._pemJson = value.pemJson;
      this._port = value.port;
      this._tls = value.tls;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pem_bundle - computed: false, optional: true, required: false
  private _pemBundle?: string; 
  public get pemBundle() {
    return this.getStringAttribute('pem_bundle');
  }
  public set pemBundle(value: string) {
    this._pemBundle = value;
  }
  public resetPemBundle() {
    this._pemBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemBundleInput() {
    return this._pemBundle;
  }

  // pem_json - computed: false, optional: true, required: false
  private _pemJson?: string; 
  public get pemJson() {
    return this.getStringAttribute('pem_json');
  }
  public set pemJson(value: string) {
    this._pemJson = value;
  }
  public resetPemJson() {
    this._pemJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemJsonInput() {
    return this._pemJson;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMongodb {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMongodbToTerraform(struct?: DatabaseSecretBackendConnectionMongodbOutputReference | DatabaseSecretBackendConnectionMongodb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMongodbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMongodb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMongodb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMongodbatlas {
  /**
  * The Private Programmatic API Key used to connect with MongoDB Atlas API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}
  */
  readonly privateKey: string;
  /**
  * The Project ID the Database User should be created within.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}
  */
  readonly projectId: string;
  /**
  * The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}
  */
  readonly publicKey: string;
}

export function databaseSecretBackendConnectionMongodbatlasToTerraform(struct?: DatabaseSecretBackendConnectionMongodbatlasOutputReference | DatabaseSecretBackendConnectionMongodbatlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}

export class DatabaseSecretBackendConnectionMongodbatlasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMongodbatlas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMongodbatlas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
      this._projectId = undefined;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
      this._projectId = value.projectId;
      this._publicKey = value.publicKey;
    }
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface DatabaseSecretBackendConnectionMssql {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Set to true when the target is a Contained Database, e.g. AzureSQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}
  */
  readonly containedDb?: boolean | cdktf.IResolvable;
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMssqlToTerraform(struct?: DatabaseSecretBackendConnectionMssqlOutputReference | DatabaseSecretBackendConnectionMssql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    contained_db: cdktf.booleanToTerraform(struct!.containedDb),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMssqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMssql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._containedDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containedDb = this._containedDb;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMssql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._containedDb = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._containedDb = value.containedDb;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // contained_db - computed: false, optional: true, required: false
  private _containedDb?: boolean | cdktf.IResolvable; 
  public get containedDb() {
    return this.getBooleanAttribute('contained_db');
  }
  public set containedDb(value: boolean | cdktf.IResolvable) {
    this._containedDb = value;
  }
  public resetContainedDb() {
    this._containedDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containedDbInput() {
    return this._containedDb;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMysql {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlToTerraform(struct?: DatabaseSecretBackendConnectionMysqlOutputReference | DatabaseSecretBackendConnectionMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tlsCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCa = this._tlsCa;
    }
    if (this._tlsCertificateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateKey = this._tlsCertificateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tls_ca - computed: false, optional: true, required: false
  private _tlsCa?: string; 
  public get tlsCa() {
    return this.getStringAttribute('tls_ca');
  }
  public set tlsCa(value: string) {
    this._tlsCa = value;
  }
  public resetTlsCa() {
    this._tlsCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaInput() {
    return this._tlsCa;
  }

  // tls_certificate_key - computed: false, optional: true, required: false
  private _tlsCertificateKey?: string; 
  public get tlsCertificateKey() {
    return this.getStringAttribute('tls_certificate_key');
  }
  public set tlsCertificateKey(value: string) {
    this._tlsCertificateKey = value;
  }
  public resetTlsCertificateKey() {
    this._tlsCertificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyInput() {
    return this._tlsCertificateKey;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMysqlAurora {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlAuroraToTerraform(struct?: DatabaseSecretBackendConnectionMysqlAuroraOutputReference | DatabaseSecretBackendConnectionMysqlAurora): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMysqlAuroraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMysqlAurora | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlAurora | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMysqlLegacy {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlLegacyToTerraform(struct?: DatabaseSecretBackendConnectionMysqlLegacyOutputReference | DatabaseSecretBackendConnectionMysqlLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMysqlLegacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMysqlLegacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlLegacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionMysqlRds {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlRdsToTerraform(struct?: DatabaseSecretBackendConnectionMysqlRdsOutputReference | DatabaseSecretBackendConnectionMysqlRds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionMysqlRdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionMysqlRds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlRds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionOracle {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionOracleToTerraform(struct?: DatabaseSecretBackendConnectionOracleOutputReference | DatabaseSecretBackendConnectionOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionOracle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionOracle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionPostgresql {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionPostgresqlToTerraform(struct?: DatabaseSecretBackendConnectionPostgresqlOutputReference | DatabaseSecretBackendConnectionPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionRedis {
  /**
  * The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specifies the host to connect to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}
  */
  readonly host: string;
  /**
  * Specifies whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * The transport port to use to connect to Redis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * Specifies whether to use TLS when connecting to Redis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username for Vault to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
}

export function databaseSecretBackendConnectionRedisToTerraform(struct?: DatabaseSecretBackendConnectionRedisOutputReference | DatabaseSecretBackendConnectionRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    host: cdktf.stringToTerraform(struct!.host),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DatabaseSecretBackendConnectionRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._host = undefined;
      this._insecureTls = undefined;
      this._password = undefined;
      this._port = undefined;
      this._tls = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._host = value.host;
      this._insecureTls = value.insecureTls;
      this._password = value.password;
      this._port = value.port;
      this._tls = value.tls;
      this._username = value.username;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseSecretBackendConnectionRedisElasticache {
  /**
  * The AWS secret key id to use to talk to ElastiCache. If omitted the credentials chain provider is used instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The AWS region where the ElastiCache cluster is hosted. If omitted the plugin tries to infer the region from the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}
  */
  readonly region?: string;
  /**
  * The configuration endpoint for the ElastiCache cluster to connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}
  */
  readonly url: string;
  /**
  * The AWS access key id to use to talk to ElastiCache. If omitted the credentials chain provider is used instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
}

export function databaseSecretBackendConnectionRedisElasticacheToTerraform(struct?: DatabaseSecretBackendConnectionRedisElasticacheOutputReference | DatabaseSecretBackendConnectionRedisElasticache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DatabaseSecretBackendConnectionRedisElasticacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionRedisElasticache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionRedisElasticache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._region = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._region = value.region;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseSecretBackendConnectionRedshift {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionRedshiftToTerraform(struct?: DatabaseSecretBackendConnectionRedshiftOutputReference | DatabaseSecretBackendConnectionRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}
export interface DatabaseSecretBackendConnectionSnowflake {
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionSnowflakeToTerraform(struct?: DatabaseSecretBackendConnectionSnowflakeOutputReference | DatabaseSecretBackendConnectionSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}

export class DatabaseSecretBackendConnectionSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseSecretBackendConnectionSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretBackendConnectionSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection vault_database_secret_backend_connection}
*/
export class DatabaseSecretBackendConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_database_secret_backend_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_connection vault_database_secret_backend_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSecretBackendConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSecretBackendConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_database_secret_backend_connection',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.12.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedRoles = config.allowedRoles;
    this._backend = config.backend;
    this._data = config.data;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._pluginName = config.pluginName;
    this._rootRotationStatements = config.rootRotationStatements;
    this._verifyConnection = config.verifyConnection;
    this._cassandra.internalValue = config.cassandra;
    this._couchbase.internalValue = config.couchbase;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._hana.internalValue = config.hana;
    this._influxdb.internalValue = config.influxdb;
    this._mongodb.internalValue = config.mongodb;
    this._mongodbatlas.internalValue = config.mongodbatlas;
    this._mssql.internalValue = config.mssql;
    this._mysql.internalValue = config.mysql;
    this._mysqlAurora.internalValue = config.mysqlAurora;
    this._mysqlLegacy.internalValue = config.mysqlLegacy;
    this._mysqlRds.internalValue = config.mysqlRds;
    this._oracle.internalValue = config.oracle;
    this._postgresql.internalValue = config.postgresql;
    this._redis.internalValue = config.redis;
    this._redisElasticache.internalValue = config.redisElasticache;
    this._redshift.internalValue = config.redshift;
    this._snowflake.internalValue = config.snowflake;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new DatabaseSecretBackendConnectionCassandraOutputReference(this, "cassandra");
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: DatabaseSecretBackendConnectionCassandra) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // couchbase - computed: false, optional: true, required: false
  private _couchbase = new DatabaseSecretBackendConnectionCouchbaseOutputReference(this, "couchbase");
  public get couchbase() {
    return this._couchbase;
  }
  public putCouchbase(value: DatabaseSecretBackendConnectionCouchbase) {
    this._couchbase.internalValue = value;
  }
  public resetCouchbase() {
    this._couchbase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couchbaseInput() {
    return this._couchbase.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DatabaseSecretBackendConnectionElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DatabaseSecretBackendConnectionElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // hana - computed: false, optional: true, required: false
  private _hana = new DatabaseSecretBackendConnectionHanaOutputReference(this, "hana");
  public get hana() {
    return this._hana;
  }
  public putHana(value: DatabaseSecretBackendConnectionHana) {
    this._hana.internalValue = value;
  }
  public resetHana() {
    this._hana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaInput() {
    return this._hana.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new DatabaseSecretBackendConnectionInfluxdbOutputReference(this, "influxdb");
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: DatabaseSecretBackendConnectionInfluxdb) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // mongodb - computed: false, optional: true, required: false
  private _mongodb = new DatabaseSecretBackendConnectionMongodbOutputReference(this, "mongodb");
  public get mongodb() {
    return this._mongodb;
  }
  public putMongodb(value: DatabaseSecretBackendConnectionMongodb) {
    this._mongodb.internalValue = value;
  }
  public resetMongodb() {
    this._mongodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbInput() {
    return this._mongodb.internalValue;
  }

  // mongodbatlas - computed: false, optional: true, required: false
  private _mongodbatlas = new DatabaseSecretBackendConnectionMongodbatlasOutputReference(this, "mongodbatlas");
  public get mongodbatlas() {
    return this._mongodbatlas;
  }
  public putMongodbatlas(value: DatabaseSecretBackendConnectionMongodbatlas) {
    this._mongodbatlas.internalValue = value;
  }
  public resetMongodbatlas() {
    this._mongodbatlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbatlasInput() {
    return this._mongodbatlas.internalValue;
  }

  // mssql - computed: false, optional: true, required: false
  private _mssql = new DatabaseSecretBackendConnectionMssqlOutputReference(this, "mssql");
  public get mssql() {
    return this._mssql;
  }
  public putMssql(value: DatabaseSecretBackendConnectionMssql) {
    this._mssql.internalValue = value;
  }
  public resetMssql() {
    this._mssql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DatabaseSecretBackendConnectionMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DatabaseSecretBackendConnectionMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // mysql_aurora - computed: false, optional: true, required: false
  private _mysqlAurora = new DatabaseSecretBackendConnectionMysqlAuroraOutputReference(this, "mysql_aurora");
  public get mysqlAurora() {
    return this._mysqlAurora;
  }
  public putMysqlAurora(value: DatabaseSecretBackendConnectionMysqlAurora) {
    this._mysqlAurora.internalValue = value;
  }
  public resetMysqlAurora() {
    this._mysqlAurora.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlAuroraInput() {
    return this._mysqlAurora.internalValue;
  }

  // mysql_legacy - computed: false, optional: true, required: false
  private _mysqlLegacy = new DatabaseSecretBackendConnectionMysqlLegacyOutputReference(this, "mysql_legacy");
  public get mysqlLegacy() {
    return this._mysqlLegacy;
  }
  public putMysqlLegacy(value: DatabaseSecretBackendConnectionMysqlLegacy) {
    this._mysqlLegacy.internalValue = value;
  }
  public resetMysqlLegacy() {
    this._mysqlLegacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLegacyInput() {
    return this._mysqlLegacy.internalValue;
  }

  // mysql_rds - computed: false, optional: true, required: false
  private _mysqlRds = new DatabaseSecretBackendConnectionMysqlRdsOutputReference(this, "mysql_rds");
  public get mysqlRds() {
    return this._mysqlRds;
  }
  public putMysqlRds(value: DatabaseSecretBackendConnectionMysqlRds) {
    this._mysqlRds.internalValue = value;
  }
  public resetMysqlRds() {
    this._mysqlRds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlRdsInput() {
    return this._mysqlRds.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new DatabaseSecretBackendConnectionOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: DatabaseSecretBackendConnectionOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DatabaseSecretBackendConnectionPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DatabaseSecretBackendConnectionPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DatabaseSecretBackendConnectionRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DatabaseSecretBackendConnectionRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // redis_elasticache - computed: false, optional: true, required: false
  private _redisElasticache = new DatabaseSecretBackendConnectionRedisElasticacheOutputReference(this, "redis_elasticache");
  public get redisElasticache() {
    return this._redisElasticache;
  }
  public putRedisElasticache(value: DatabaseSecretBackendConnectionRedisElasticache) {
    this._redisElasticache.internalValue = value;
  }
  public resetRedisElasticache() {
    this._redisElasticache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisElasticacheInput() {
    return this._redisElasticache.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new DatabaseSecretBackendConnectionRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: DatabaseSecretBackendConnectionRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new DatabaseSecretBackendConnectionSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: DatabaseSecretBackendConnectionSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRoles),
      backend: cdktf.stringToTerraform(this._backend),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rootRotationStatements),
      verify_connection: cdktf.booleanToTerraform(this._verifyConnection),
      cassandra: databaseSecretBackendConnectionCassandraToTerraform(this._cassandra.internalValue),
      couchbase: databaseSecretBackendConnectionCouchbaseToTerraform(this._couchbase.internalValue),
      elasticsearch: databaseSecretBackendConnectionElasticsearchToTerraform(this._elasticsearch.internalValue),
      hana: databaseSecretBackendConnectionHanaToTerraform(this._hana.internalValue),
      influxdb: databaseSecretBackendConnectionInfluxdbToTerraform(this._influxdb.internalValue),
      mongodb: databaseSecretBackendConnectionMongodbToTerraform(this._mongodb.internalValue),
      mongodbatlas: databaseSecretBackendConnectionMongodbatlasToTerraform(this._mongodbatlas.internalValue),
      mssql: databaseSecretBackendConnectionMssqlToTerraform(this._mssql.internalValue),
      mysql: databaseSecretBackendConnectionMysqlToTerraform(this._mysql.internalValue),
      mysql_aurora: databaseSecretBackendConnectionMysqlAuroraToTerraform(this._mysqlAurora.internalValue),
      mysql_legacy: databaseSecretBackendConnectionMysqlLegacyToTerraform(this._mysqlLegacy.internalValue),
      mysql_rds: databaseSecretBackendConnectionMysqlRdsToTerraform(this._mysqlRds.internalValue),
      oracle: databaseSecretBackendConnectionOracleToTerraform(this._oracle.internalValue),
      postgresql: databaseSecretBackendConnectionPostgresqlToTerraform(this._postgresql.internalValue),
      redis: databaseSecretBackendConnectionRedisToTerraform(this._redis.internalValue),
      redis_elasticache: databaseSecretBackendConnectionRedisElasticacheToTerraform(this._redisElasticache.internalValue),
      redshift: databaseSecretBackendConnectionRedshiftToTerraform(this._redshift.internalValue),
      snowflake: databaseSecretBackendConnectionSnowflakeToTerraform(this._snowflake.internalValue),
    };
  }
}
