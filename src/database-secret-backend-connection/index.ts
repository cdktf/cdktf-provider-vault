/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSecretBackendConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of roles that are allowed to use this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Unique name of the Vault mount to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}
  */
  readonly backend: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disable_automated_rotation DatabaseSecretBackendConnection#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the database connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#rotation_period DatabaseSecretBackendConnection#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#rotation_schedule DatabaseSecretBackendConnection#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#rotation_window DatabaseSecretBackendConnection#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Specifies if the connection is verified during initial configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
  /**
  * cassandra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}
  */
  readonly cassandra?: DatabaseSecretBackendConnectionCassandra;
  /**
  * couchbase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}
  */
  readonly couchbase?: DatabaseSecretBackendConnectionCouchbase;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}
  */
  readonly elasticsearch?: DatabaseSecretBackendConnectionElasticsearch;
  /**
  * hana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}
  */
  readonly hana?: DatabaseSecretBackendConnectionHana;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}
  */
  readonly influxdb?: DatabaseSecretBackendConnectionInfluxdb;
  /**
  * mongodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}
  */
  readonly mongodb?: DatabaseSecretBackendConnectionMongodb;
  /**
  * mongodbatlas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}
  */
  readonly mongodbatlas?: DatabaseSecretBackendConnectionMongodbatlas;
  /**
  * mssql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}
  */
  readonly mssql?: DatabaseSecretBackendConnectionMssql;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}
  */
  readonly mysql?: DatabaseSecretBackendConnectionMysql;
  /**
  * mysql_aurora block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}
  */
  readonly mysqlAurora?: DatabaseSecretBackendConnectionMysqlAurora;
  /**
  * mysql_legacy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}
  */
  readonly mysqlLegacy?: DatabaseSecretBackendConnectionMysqlLegacy;
  /**
  * mysql_rds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}
  */
  readonly mysqlRds?: DatabaseSecretBackendConnectionMysqlRds;
  /**
  * oracle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}
  */
  readonly oracle?: DatabaseSecretBackendConnectionOracle;
  /**
  * postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}
  */
  readonly postgresql?: DatabaseSecretBackendConnectionPostgresql;
  /**
  * redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}
  */
  readonly redis?: DatabaseSecretBackendConnectionRedis;
  /**
  * redis_elasticache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}
  */
  readonly redisElasticache?: DatabaseSecretBackendConnectionRedisElasticache;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}
  */
  readonly redshift?: DatabaseSecretBackendConnectionRedshift;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}
  */
  readonly snowflake?: DatabaseSecretBackendConnectionSnowflake;
}
export interface DatabaseSecretBackendConnectionCassandra {
  /**
  * The number of seconds to use as a connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Cassandra hosts to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}
  */
  readonly hosts?: string[];
  /**
  * Whether to skip verification of the server certificate when using TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * The password to use when authenticating with Cassandra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}
  */
  readonly pemJson?: string;
  /**
  * The transport port to use to connect to Cassandra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * The CQL protocol version to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}
  */
  readonly protocolVersion?: number;
  /**
  * Skip permissions checks when a connection to Cassandra is first created. These checks ensure that Vault is able to create roles, but can be resource intensive in clusters with many roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#skip_verification DatabaseSecretBackendConnection#skip_verification}
  */
  readonly skipVerification?: boolean | cdktf.IResolvable;
  /**
  * Whether to use TLS when connecting to Cassandra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * The username to use when authenticating with Cassandra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
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
    skip_verification: cdktf.booleanToTerraform(struct!.skipVerification),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseSecretBackendConnectionCassandraToHclTerraform(struct?: DatabaseSecretBackendConnectionCassandraOutputReference | DatabaseSecretBackendConnectionCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_bundle: {
      value: cdktf.stringToHclTerraform(struct!.pemBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_json: {
      value: cdktf.stringToHclTerraform(struct!.pemJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_version: {
      value: cdktf.numberToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._skipVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipVerification = this._skipVerification;
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
      this._skipVerification = undefined;
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
      this._skipVerification = value.skipVerification;
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

  // skip_verification - computed: false, optional: true, required: false
  private _skipVerification?: boolean | cdktf.IResolvable; 
  public get skipVerification() {
    return this.getBooleanAttribute('skip_verification');
  }
  public set skipVerification(value: boolean | cdktf.IResolvable) {
    this._skipVerification = value;
  }
  public resetSkipVerification() {
    this._skipVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerificationInput() {
    return this._skipVerification;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}
  */
  readonly base64Pem?: string;
  /**
  * Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}
  */
  readonly hosts: string[];
  /**
  *  Specifies whether to skip verification of the server certificate when using TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * Specifies whether to use TLS when connecting to Couchbase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username for Vault to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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


export function databaseSecretBackendConnectionCouchbaseToHclTerraform(struct?: DatabaseSecretBackendConnectionCouchbaseOutputReference | DatabaseSecretBackendConnectionCouchbase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_pem: {
      value: cdktf.stringToHclTerraform(struct!.base64Pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}
  */
  readonly caPath?: string;
  /**
  * The path to the certificate for the Elasticsearch client to present for communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The path to the key for the Elasticsearch client to use for communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}
  */
  readonly clientKey?: string;
  /**
  * Whether to disable certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to be used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * This, if set, is used to set the SNI host when connecting via TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * The URL for Elasticsearch's API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}
  */
  readonly url: string;
  /**
  * The username to be used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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


export function databaseSecretBackendConnectionElasticsearchToHclTerraform(struct?: DatabaseSecretBackendConnectionElasticsearchOutputReference | DatabaseSecretBackendConnectionElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
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
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseSecretBackendConnectionHanaToHclTerraform(struct?: DatabaseSecretBackendConnectionHanaOutputReference | DatabaseSecretBackendConnectionHana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_escaping: {
      value: cdktf.booleanToHclTerraform(struct!.disableEscaping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
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
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
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
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Influxdb host to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}
  */
  readonly host: string;
  /**
  * Whether to skip verification of the server certificate when using TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}
  */
  readonly pemJson?: string;
  /**
  * The transport port to use to connect to Influxdb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * Whether to use TLS when connecting to Influxdb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username to use for superuser access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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


export function databaseSecretBackendConnectionInfluxdbToHclTerraform(struct?: DatabaseSecretBackendConnectionInfluxdbOutputReference | DatabaseSecretBackendConnectionInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_bundle: {
      value: cdktf.stringToHclTerraform(struct!.pemBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_json: {
      value: cdktf.stringToHclTerraform(struct!.pemJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMongodbToHclTerraform(struct?: DatabaseSecretBackendConnectionMongodbOutputReference | DatabaseSecretBackendConnectionMongodb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
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
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
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
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}
  */
  readonly privateKey: string;
  /**
  * The Project ID the Database User should be created within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}
  */
  readonly projectId: string;
  /**
  * The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}
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


export function databaseSecretBackendConnectionMongodbatlasToHclTerraform(struct?: DatabaseSecretBackendConnectionMongodbatlasOutputReference | DatabaseSecretBackendConnectionMongodbatlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Set to true when the target is a Contained Database, e.g. AzureSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}
  */
  readonly containedDb?: boolean | cdktf.IResolvable;
  /**
  * Disable special character escaping in username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMssqlToHclTerraform(struct?: DatabaseSecretBackendConnectionMssqlOutputReference | DatabaseSecretBackendConnectionMssql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contained_db: {
      value: cdktf.booleanToHclTerraform(struct!.containedDb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_escaping: {
      value: cdktf.booleanToHclTerraform(struct!.disableEscaping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
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
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
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
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
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
  * Specify alternative authorization type. (Only 'gcp_iam' is valid currently)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}
  */
  readonly authType?: string;
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * A JSON encoded credential for use with IAM authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}
  */
  readonly serviceAccountJson?: string;
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlToTerraform(struct?: DatabaseSecretBackendConnectionMysqlOutputReference | DatabaseSecretBackendConnectionMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMysqlToHclTerraform(struct?: DatabaseSecretBackendConnectionMysqlOutputReference | DatabaseSecretBackendConnectionMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
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
      this._authType = undefined;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._serviceAccountJson = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._serviceAccountJson = value.serviceAccountJson;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
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
  * Specify alternative authorization type. (Only 'gcp_iam' is valid currently)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}
  */
  readonly authType?: string;
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * A JSON encoded credential for use with IAM authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}
  */
  readonly serviceAccountJson?: string;
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlAuroraToTerraform(struct?: DatabaseSecretBackendConnectionMysqlAuroraOutputReference | DatabaseSecretBackendConnectionMysqlAurora): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMysqlAuroraToHclTerraform(struct?: DatabaseSecretBackendConnectionMysqlAuroraOutputReference | DatabaseSecretBackendConnectionMysqlAurora): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
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

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlAurora | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._serviceAccountJson = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._serviceAccountJson = value.serviceAccountJson;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
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
export interface DatabaseSecretBackendConnectionMysqlLegacy {
  /**
  * Specify alternative authorization type. (Only 'gcp_iam' is valid currently)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}
  */
  readonly authType?: string;
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * A JSON encoded credential for use with IAM authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}
  */
  readonly serviceAccountJson?: string;
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlLegacyToTerraform(struct?: DatabaseSecretBackendConnectionMysqlLegacyOutputReference | DatabaseSecretBackendConnectionMysqlLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMysqlLegacyToHclTerraform(struct?: DatabaseSecretBackendConnectionMysqlLegacyOutputReference | DatabaseSecretBackendConnectionMysqlLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
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

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlLegacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._serviceAccountJson = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._serviceAccountJson = value.serviceAccountJson;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
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
export interface DatabaseSecretBackendConnectionMysqlRds {
  /**
  * Specify alternative authorization type. (Only 'gcp_iam' is valid currently)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}
  */
  readonly authType?: string;
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * A JSON encoded credential for use with IAM authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}
  */
  readonly serviceAccountJson?: string;
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionMysqlRdsToTerraform(struct?: DatabaseSecretBackendConnectionMysqlRdsOutputReference | DatabaseSecretBackendConnectionMysqlRds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionMysqlRdsToHclTerraform(struct?: DatabaseSecretBackendConnectionMysqlRdsOutputReference | DatabaseSecretBackendConnectionMysqlRds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
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

  public set internalValue(value: DatabaseSecretBackendConnectionMysqlRds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._connectionUrl = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._serviceAccountJson = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._connectionUrl = value.connectionUrl;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._serviceAccountJson = value.serviceAccountJson;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
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
export interface DatabaseSecretBackendConnectionOracle {
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Set to true to disconnect any open sessions prior to running the revocation statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disconnect_sessions DatabaseSecretBackendConnection#disconnect_sessions}
  */
  readonly disconnectSessions?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * Set to true in order to split statements after semi-colons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#split_statements DatabaseSecretBackendConnection#split_statements}
  */
  readonly splitStatements?: boolean | cdktf.IResolvable;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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
    disconnect_sessions: cdktf.booleanToTerraform(struct!.disconnectSessions),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    split_statements: cdktf.booleanToTerraform(struct!.splitStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionOracleToHclTerraform(struct?: DatabaseSecretBackendConnectionOracleOutputReference | DatabaseSecretBackendConnectionOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disconnect_sessions: {
      value: cdktf.booleanToHclTerraform(struct!.disconnectSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_statements: {
      value: cdktf.booleanToHclTerraform(struct!.splitStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._disconnectSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectSessions = this._disconnectSessions;
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._splitStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitStatements = this._splitStatements;
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
      this._disconnectSessions = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._splitStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._disconnectSessions = value.disconnectSessions;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._splitStatements = value.splitStatements;
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

  // disconnect_sessions - computed: false, optional: true, required: false
  private _disconnectSessions?: boolean | cdktf.IResolvable; 
  public get disconnectSessions() {
    return this.getBooleanAttribute('disconnect_sessions');
  }
  public set disconnectSessions(value: boolean | cdktf.IResolvable) {
    this._disconnectSessions = value;
  }
  public resetDisconnectSessions() {
    this._disconnectSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectSessionsInput() {
    return this._disconnectSessions;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // split_statements - computed: false, optional: true, required: false
  private _splitStatements?: boolean | cdktf.IResolvable; 
  public get splitStatements() {
    return this.getBooleanAttribute('split_statements');
  }
  public set splitStatements(value: boolean | cdktf.IResolvable) {
    this._splitStatements = value;
  }
  public resetSplitStatements() {
    this._splitStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitStatementsInput() {
    return this._splitStatements;
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
  * Specify alternative authorization type. (Only 'gcp_iam' is valid currently)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}
  */
  readonly authType?: string;
  /**
  * Connection string to use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * When set to `scram-sha-256`, passwords will be hashed by Vault before being sent to PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_authentication DatabaseSecretBackendConnection#password_authentication}
  */
  readonly passwordAuthentication?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The secret key used for the x509 client certificate. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}
  */
  readonly privateKey?: string;
  /**
  * If set, allows onboarding static roles with a rootless connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#self_managed DatabaseSecretBackendConnection#self_managed}
  */
  readonly selfManaged?: boolean | cdktf.IResolvable;
  /**
  * A JSON encoded credential for use with IAM authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}
  */
  readonly serviceAccountJson?: string;
  /**
  * The x509 CA file for validating the certificate presented by the PostgreSQL server. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * The x509 client certificate for connecting to the database. Must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls_certificate DatabaseSecretBackendConnection#tls_certificate}
  */
  readonly tlsCertificate?: string;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
  */
  readonly usernameTemplate?: string;
}

export function databaseSecretBackendConnectionPostgresqlToTerraform(struct?: DatabaseSecretBackendConnectionPostgresqlOutputReference | DatabaseSecretBackendConnectionPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    password: cdktf.stringToTerraform(struct!.password),
    password_authentication: cdktf.stringToTerraform(struct!.passwordAuthentication),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    self_managed: cdktf.booleanToTerraform(struct!.selfManaged),
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate: cdktf.stringToTerraform(struct!.tlsCertificate),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionPostgresqlToHclTerraform(struct?: DatabaseSecretBackendConnectionPostgresqlOutputReference | DatabaseSecretBackendConnectionPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_escaping: {
      value: cdktf.booleanToHclTerraform(struct!.disableEscaping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_authentication: {
      value: cdktf.stringToHclTerraform(struct!.passwordAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_managed: {
      value: cdktf.booleanToHclTerraform(struct!.selfManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
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
    if (this._passwordAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._selfManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManaged = this._selfManaged;
    }
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
    }
    if (this._tlsCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCa = this._tlsCa;
    }
    if (this._tlsCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificate = this._tlsCertificate;
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
      this._authType = undefined;
      this._connectionUrl = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._password = undefined;
      this._passwordAuthentication = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._privateKey = undefined;
      this._selfManaged = undefined;
      this._serviceAccountJson = undefined;
      this._tlsCa = undefined;
      this._tlsCertificate = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._connectionUrl = value.connectionUrl;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._password = value.password;
      this._passwordAuthentication = value.passwordAuthentication;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._privateKey = value.privateKey;
      this._selfManaged = value.selfManaged;
      this._serviceAccountJson = value.serviceAccountJson;
      this._tlsCa = value.tlsCa;
      this._tlsCertificate = value.tlsCertificate;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication?: string; 
  public get passwordAuthentication() {
    return this.getStringAttribute('password_authentication');
  }
  public set passwordAuthentication(value: string) {
    this._passwordAuthentication = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged?: boolean | cdktf.IResolvable; 
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }
  public set selfManaged(value: boolean | cdktf.IResolvable) {
    this._selfManaged = value;
  }
  public resetSelfManaged() {
    this._selfManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged;
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
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

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specifies the host to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}
  */
  readonly host: string;
  /**
  * Specifies whether to skip verification of the server certificate when using TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the password corresponding to the given username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password: string;
  /**
  * The transport port to use to connect to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}
  */
  readonly port?: number;
  /**
  * Specifies whether to use TLS when connecting to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username for Vault to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
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


export function databaseSecretBackendConnectionRedisToHclTerraform(struct?: DatabaseSecretBackendConnectionRedisOutputReference | DatabaseSecretBackendConnectionRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * The AWS region where the ElastiCache cluster is hosted. If omitted the plugin tries to infer the region from the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}
  */
  readonly region?: string;
  /**
  * The configuration endpoint for the ElastiCache cluster to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}
  */
  readonly url: string;
  /**
  * The AWS access key id to use to talk to ElastiCache. If omitted the credentials chain provider is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
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


export function databaseSecretBackendConnectionRedisElasticacheToHclTerraform(struct?: DatabaseSecretBackendConnectionRedisElasticacheOutputReference | DatabaseSecretBackendConnectionRedisElasticache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Disable special character escaping in username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionRedshiftToHclTerraform(struct?: DatabaseSecretBackendConnectionRedshiftOutputReference | DatabaseSecretBackendConnectionRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_escaping: {
      value: cdktf.booleanToHclTerraform(struct!.disableEscaping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
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
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
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
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Maximum number of seconds a connection may be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}
  */
  readonly password?: string;
  /**
  * Write-only field for the root credential password used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo DatabaseSecretBackendConnection#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for root credential password write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#password_wo_version DatabaseSecretBackendConnection#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * The private key configured for the admin user in Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#private_key_wo DatabaseSecretBackendConnection#private_key_wo}
  */
  readonly privateKeyWo?: string;
  /**
  * Version counter for the private key key-pair credentials write-only field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#private_key_wo_version DatabaseSecretBackendConnection#private_key_wo_version}
  */
  readonly privateKeyWoVersion?: number;
  /**
  * The root credential username used in the connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}
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
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
    private_key_wo: cdktf.stringToTerraform(struct!.privateKeyWo),
    private_key_wo_version: cdktf.numberToTerraform(struct!.privateKeyWoVersion),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
  }
}


export function databaseSecretBackendConnectionSnowflakeToHclTerraform(struct?: DatabaseSecretBackendConnectionSnowflakeOutputReference | DatabaseSecretBackendConnectionSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key_wo: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.privateKeyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_template: {
      value: cdktf.stringToHclTerraform(struct!.usernameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._privateKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyWo = this._privateKeyWo;
    }
    if (this._privateKeyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyWoVersion = this._privateKeyWoVersion;
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
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._privateKeyWo = undefined;
      this._privateKeyWoVersion = undefined;
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
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._privateKeyWo = value.privateKeyWo;
      this._privateKeyWoVersion = value.privateKeyWoVersion;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // private_key_wo - computed: false, optional: true, required: false
  private _privateKeyWo?: string; 
  public get privateKeyWo() {
    return this.getStringAttribute('private_key_wo');
  }
  public set privateKeyWo(value: string) {
    this._privateKeyWo = value;
  }
  public resetPrivateKeyWo() {
    this._privateKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoInput() {
    return this._privateKeyWo;
  }

  // private_key_wo_version - computed: false, optional: true, required: false
  private _privateKeyWoVersion?: number; 
  public get privateKeyWoVersion() {
    return this.getNumberAttribute('private_key_wo_version');
  }
  public set privateKeyWoVersion(value: number) {
    this._privateKeyWoVersion = value;
  }
  public resetPrivateKeyWoVersion() {
    this._privateKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoVersionInput() {
    return this._privateKeyWoVersion;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection}
*/
export class DatabaseSecretBackendConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_database_secret_backend_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseSecretBackendConnection to import
  * @param importFromId The id of the existing DatabaseSecretBackendConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseSecretBackendConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_database_secret_backend_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection} Resource
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
        providerVersion: '5.2.1',
        providerVersionConstraint: '~> 5.0'
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
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._pluginName = config.pluginName;
    this._rootRotationStatements = config.rootRotationStatements;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
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

  // disable_automated_rotation - computed: false, optional: true, required: false
  private _disableAutomatedRotation?: boolean | cdktf.IResolvable; 
  public get disableAutomatedRotation() {
    return this.getBooleanAttribute('disable_automated_rotation');
  }
  public set disableAutomatedRotation(value: boolean | cdktf.IResolvable) {
    this._disableAutomatedRotation = value;
  }
  public resetDisableAutomatedRotation() {
    this._disableAutomatedRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomatedRotationInput() {
    return this._disableAutomatedRotation;
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

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule - computed: false, optional: true, required: false
  private _rotationSchedule?: string; 
  public get rotationSchedule() {
    return this.getStringAttribute('rotation_schedule');
  }
  public set rotationSchedule(value: string) {
    this._rotationSchedule = value;
  }
  public resetRotationSchedule() {
    this._rotationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationScheduleInput() {
    return this._rotationSchedule;
  }

  // rotation_window - computed: false, optional: true, required: false
  private _rotationWindow?: number; 
  public get rotationWindow() {
    return this.getNumberAttribute('rotation_window');
  }
  public set rotationWindow(value: number) {
    this._rotationWindow = value;
  }
  public resetRotationWindow() {
    this._rotationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowInput() {
    return this._rotationWindow;
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
      disable_automated_rotation: cdktf.booleanToTerraform(this._disableAutomatedRotation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rootRotationStatements),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktf.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktf.numberToTerraform(this._rotationWindow),
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disable_automated_rotation: {
        value: cdktf.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_rotation_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rootRotationStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rotation_period: {
        value: cdktf.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_schedule: {
        value: cdktf.stringToHclTerraform(this._rotationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_window: {
        value: cdktf.numberToHclTerraform(this._rotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verify_connection: {
        value: cdktf.booleanToHclTerraform(this._verifyConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cassandra: {
        value: databaseSecretBackendConnectionCassandraToHclTerraform(this._cassandra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionCassandraList",
      },
      couchbase: {
        value: databaseSecretBackendConnectionCouchbaseToHclTerraform(this._couchbase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionCouchbaseList",
      },
      elasticsearch: {
        value: databaseSecretBackendConnectionElasticsearchToHclTerraform(this._elasticsearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionElasticsearchList",
      },
      hana: {
        value: databaseSecretBackendConnectionHanaToHclTerraform(this._hana.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionHanaList",
      },
      influxdb: {
        value: databaseSecretBackendConnectionInfluxdbToHclTerraform(this._influxdb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionInfluxdbList",
      },
      mongodb: {
        value: databaseSecretBackendConnectionMongodbToHclTerraform(this._mongodb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMongodbList",
      },
      mongodbatlas: {
        value: databaseSecretBackendConnectionMongodbatlasToHclTerraform(this._mongodbatlas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMongodbatlasList",
      },
      mssql: {
        value: databaseSecretBackendConnectionMssqlToHclTerraform(this._mssql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMssqlList",
      },
      mysql: {
        value: databaseSecretBackendConnectionMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMysqlList",
      },
      mysql_aurora: {
        value: databaseSecretBackendConnectionMysqlAuroraToHclTerraform(this._mysqlAurora.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMysqlAuroraList",
      },
      mysql_legacy: {
        value: databaseSecretBackendConnectionMysqlLegacyToHclTerraform(this._mysqlLegacy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMysqlLegacyList",
      },
      mysql_rds: {
        value: databaseSecretBackendConnectionMysqlRdsToHclTerraform(this._mysqlRds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionMysqlRdsList",
      },
      oracle: {
        value: databaseSecretBackendConnectionOracleToHclTerraform(this._oracle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionOracleList",
      },
      postgresql: {
        value: databaseSecretBackendConnectionPostgresqlToHclTerraform(this._postgresql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionPostgresqlList",
      },
      redis: {
        value: databaseSecretBackendConnectionRedisToHclTerraform(this._redis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionRedisList",
      },
      redis_elasticache: {
        value: databaseSecretBackendConnectionRedisElasticacheToHclTerraform(this._redisElasticache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionRedisElasticacheList",
      },
      redshift: {
        value: databaseSecretBackendConnectionRedshiftToHclTerraform(this._redshift.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionRedshiftList",
      },
      snowflake: {
        value: databaseSecretBackendConnectionSnowflakeToHclTerraform(this._snowflake.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseSecretBackendConnectionSnowflakeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
