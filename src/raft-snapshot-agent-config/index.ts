// https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RaftSnapshotAgentConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * S3 bucket to write snapshots to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}
  */
  readonly awsS3Bucket?: string;
  /**
  * Disable TLS for the S3 endpoint. This should only be used for testing purposes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}
  */
  readonly awsS3DisableTls?: boolean | cdktf.IResolvable;
  /**
  * Use KMS to encrypt bucket contents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}
  */
  readonly awsS3EnableKms?: boolean | cdktf.IResolvable;
  /**
  * AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}
  */
  readonly awsS3Endpoint?: string;
  /**
  * Use the endpoint/bucket URL style instead of bucket.endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}
  */
  readonly awsS3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Use named KMS key, when aws_s3_enable_kms=true
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}
  */
  readonly awsS3KmsKey?: string;
  /**
  * AWS region bucket is in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}
  */
  readonly awsS3Region?: string;
  /**
  * Use AES256 to encrypt bucket contents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}
  */
  readonly awsS3ServerSideEncryption?: boolean | cdktf.IResolvable;
  /**
  * AWS secret access key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * AWS session token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}
  */
  readonly awsSessionToken?: string;
  /**
  * Azure account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}
  */
  readonly azureAccountKey?: string;
  /**
  * Azure account name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}
  */
  readonly azureAccountName?: string;
  /**
  * Azure blob environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}
  */
  readonly azureBlobEnvironment?: string;
  /**
  * Azure container name to write snapshots to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}
  */
  readonly azureContainerName?: string;
  /**
  * Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}
  */
  readonly azureEndpoint?: string;
  /**
  * The file or object name of snapshot files will start with this string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}
  */
  readonly filePrefix?: string;
  /**
  * Disable TLS for the GCS endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}
  */
  readonly googleDisableTls?: boolean | cdktf.IResolvable;
  /**
  * GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}
  */
  readonly googleEndpoint?: string;
  /**
  * GCS bucket to write snapshots to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}
  */
  readonly googleGcsBucket?: string;
  /**
  * Google service account key in JSON format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}
  */
  readonly googleServiceAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds between snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * The maximum space, in bytes, to use for snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}
  */
  readonly localMaxSpace?: number;
  /**
  * Name of the snapshot agent configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * The directory or bucket prefix to to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * How many snapshots are to be kept.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}
  */
  readonly retain?: number;
  /**
  * What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}
  */
  readonly storageType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config vault_raft_snapshot_agent_config}
*/
export class RaftSnapshotAgentConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_raft_snapshot_agent_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/raft_snapshot_agent_config vault_raft_snapshot_agent_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RaftSnapshotAgentConfigConfig
  */
  public constructor(scope: Construct, id: string, config: RaftSnapshotAgentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_raft_snapshot_agent_config',
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
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsS3Bucket = config.awsS3Bucket;
    this._awsS3DisableTls = config.awsS3DisableTls;
    this._awsS3EnableKms = config.awsS3EnableKms;
    this._awsS3Endpoint = config.awsS3Endpoint;
    this._awsS3ForcePathStyle = config.awsS3ForcePathStyle;
    this._awsS3KmsKey = config.awsS3KmsKey;
    this._awsS3Region = config.awsS3Region;
    this._awsS3ServerSideEncryption = config.awsS3ServerSideEncryption;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._awsSessionToken = config.awsSessionToken;
    this._azureAccountKey = config.azureAccountKey;
    this._azureAccountName = config.azureAccountName;
    this._azureBlobEnvironment = config.azureBlobEnvironment;
    this._azureContainerName = config.azureContainerName;
    this._azureEndpoint = config.azureEndpoint;
    this._filePrefix = config.filePrefix;
    this._googleDisableTls = config.googleDisableTls;
    this._googleEndpoint = config.googleEndpoint;
    this._googleGcsBucket = config.googleGcsBucket;
    this._googleServiceAccountKey = config.googleServiceAccountKey;
    this._id = config.id;
    this._intervalSeconds = config.intervalSeconds;
    this._localMaxSpace = config.localMaxSpace;
    this._name = config.name;
    this._namespace = config.namespace;
    this._pathPrefix = config.pathPrefix;
    this._retain = config.retain;
    this._storageType = config.storageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_s3_bucket - computed: false, optional: true, required: false
  private _awsS3Bucket?: string; 
  public get awsS3Bucket() {
    return this.getStringAttribute('aws_s3_bucket');
  }
  public set awsS3Bucket(value: string) {
    this._awsS3Bucket = value;
  }
  public resetAwsS3Bucket() {
    this._awsS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3BucketInput() {
    return this._awsS3Bucket;
  }

  // aws_s3_disable_tls - computed: false, optional: true, required: false
  private _awsS3DisableTls?: boolean | cdktf.IResolvable; 
  public get awsS3DisableTls() {
    return this.getBooleanAttribute('aws_s3_disable_tls');
  }
  public set awsS3DisableTls(value: boolean | cdktf.IResolvable) {
    this._awsS3DisableTls = value;
  }
  public resetAwsS3DisableTls() {
    this._awsS3DisableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3DisableTlsInput() {
    return this._awsS3DisableTls;
  }

  // aws_s3_enable_kms - computed: false, optional: true, required: false
  private _awsS3EnableKms?: boolean | cdktf.IResolvable; 
  public get awsS3EnableKms() {
    return this.getBooleanAttribute('aws_s3_enable_kms');
  }
  public set awsS3EnableKms(value: boolean | cdktf.IResolvable) {
    this._awsS3EnableKms = value;
  }
  public resetAwsS3EnableKms() {
    this._awsS3EnableKms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3EnableKmsInput() {
    return this._awsS3EnableKms;
  }

  // aws_s3_endpoint - computed: false, optional: true, required: false
  private _awsS3Endpoint?: string; 
  public get awsS3Endpoint() {
    return this.getStringAttribute('aws_s3_endpoint');
  }
  public set awsS3Endpoint(value: string) {
    this._awsS3Endpoint = value;
  }
  public resetAwsS3Endpoint() {
    this._awsS3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3EndpointInput() {
    return this._awsS3Endpoint;
  }

  // aws_s3_force_path_style - computed: false, optional: true, required: false
  private _awsS3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get awsS3ForcePathStyle() {
    return this.getBooleanAttribute('aws_s3_force_path_style');
  }
  public set awsS3ForcePathStyle(value: boolean | cdktf.IResolvable) {
    this._awsS3ForcePathStyle = value;
  }
  public resetAwsS3ForcePathStyle() {
    this._awsS3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3ForcePathStyleInput() {
    return this._awsS3ForcePathStyle;
  }

  // aws_s3_kms_key - computed: false, optional: true, required: false
  private _awsS3KmsKey?: string; 
  public get awsS3KmsKey() {
    return this.getStringAttribute('aws_s3_kms_key');
  }
  public set awsS3KmsKey(value: string) {
    this._awsS3KmsKey = value;
  }
  public resetAwsS3KmsKey() {
    this._awsS3KmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3KmsKeyInput() {
    return this._awsS3KmsKey;
  }

  // aws_s3_region - computed: false, optional: true, required: false
  private _awsS3Region?: string; 
  public get awsS3Region() {
    return this.getStringAttribute('aws_s3_region');
  }
  public set awsS3Region(value: string) {
    this._awsS3Region = value;
  }
  public resetAwsS3Region() {
    this._awsS3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3RegionInput() {
    return this._awsS3Region;
  }

  // aws_s3_server_side_encryption - computed: false, optional: true, required: false
  private _awsS3ServerSideEncryption?: boolean | cdktf.IResolvable; 
  public get awsS3ServerSideEncryption() {
    return this.getBooleanAttribute('aws_s3_server_side_encryption');
  }
  public set awsS3ServerSideEncryption(value: boolean | cdktf.IResolvable) {
    this._awsS3ServerSideEncryption = value;
  }
  public resetAwsS3ServerSideEncryption() {
    this._awsS3ServerSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3ServerSideEncryptionInput() {
    return this._awsS3ServerSideEncryption;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // aws_session_token - computed: false, optional: true, required: false
  private _awsSessionToken?: string; 
  public get awsSessionToken() {
    return this.getStringAttribute('aws_session_token');
  }
  public set awsSessionToken(value: string) {
    this._awsSessionToken = value;
  }
  public resetAwsSessionToken() {
    this._awsSessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSessionTokenInput() {
    return this._awsSessionToken;
  }

  // azure_account_key - computed: false, optional: true, required: false
  private _azureAccountKey?: string; 
  public get azureAccountKey() {
    return this.getStringAttribute('azure_account_key');
  }
  public set azureAccountKey(value: string) {
    this._azureAccountKey = value;
  }
  public resetAzureAccountKey() {
    this._azureAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccountKeyInput() {
    return this._azureAccountKey;
  }

  // azure_account_name - computed: false, optional: true, required: false
  private _azureAccountName?: string; 
  public get azureAccountName() {
    return this.getStringAttribute('azure_account_name');
  }
  public set azureAccountName(value: string) {
    this._azureAccountName = value;
  }
  public resetAzureAccountName() {
    this._azureAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccountNameInput() {
    return this._azureAccountName;
  }

  // azure_blob_environment - computed: false, optional: true, required: false
  private _azureBlobEnvironment?: string; 
  public get azureBlobEnvironment() {
    return this.getStringAttribute('azure_blob_environment');
  }
  public set azureBlobEnvironment(value: string) {
    this._azureBlobEnvironment = value;
  }
  public resetAzureBlobEnvironment() {
    this._azureBlobEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobEnvironmentInput() {
    return this._azureBlobEnvironment;
  }

  // azure_container_name - computed: false, optional: true, required: false
  private _azureContainerName?: string; 
  public get azureContainerName() {
    return this.getStringAttribute('azure_container_name');
  }
  public set azureContainerName(value: string) {
    this._azureContainerName = value;
  }
  public resetAzureContainerName() {
    this._azureContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureContainerNameInput() {
    return this._azureContainerName;
  }

  // azure_endpoint - computed: false, optional: true, required: false
  private _azureEndpoint?: string; 
  public get azureEndpoint() {
    return this.getStringAttribute('azure_endpoint');
  }
  public set azureEndpoint(value: string) {
    this._azureEndpoint = value;
  }
  public resetAzureEndpoint() {
    this._azureEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEndpointInput() {
    return this._azureEndpoint;
  }

  // file_prefix - computed: false, optional: true, required: false
  private _filePrefix?: string; 
  public get filePrefix() {
    return this.getStringAttribute('file_prefix');
  }
  public set filePrefix(value: string) {
    this._filePrefix = value;
  }
  public resetFilePrefix() {
    this._filePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePrefixInput() {
    return this._filePrefix;
  }

  // google_disable_tls - computed: false, optional: true, required: false
  private _googleDisableTls?: boolean | cdktf.IResolvable; 
  public get googleDisableTls() {
    return this.getBooleanAttribute('google_disable_tls');
  }
  public set googleDisableTls(value: boolean | cdktf.IResolvable) {
    this._googleDisableTls = value;
  }
  public resetGoogleDisableTls() {
    this._googleDisableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDisableTlsInput() {
    return this._googleDisableTls;
  }

  // google_endpoint - computed: false, optional: true, required: false
  private _googleEndpoint?: string; 
  public get googleEndpoint() {
    return this.getStringAttribute('google_endpoint');
  }
  public set googleEndpoint(value: string) {
    this._googleEndpoint = value;
  }
  public resetGoogleEndpoint() {
    this._googleEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleEndpointInput() {
    return this._googleEndpoint;
  }

  // google_gcs_bucket - computed: false, optional: true, required: false
  private _googleGcsBucket?: string; 
  public get googleGcsBucket() {
    return this.getStringAttribute('google_gcs_bucket');
  }
  public set googleGcsBucket(value: string) {
    this._googleGcsBucket = value;
  }
  public resetGoogleGcsBucket() {
    this._googleGcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleGcsBucketInput() {
    return this._googleGcsBucket;
  }

  // google_service_account_key - computed: false, optional: true, required: false
  private _googleServiceAccountKey?: string; 
  public get googleServiceAccountKey() {
    return this.getStringAttribute('google_service_account_key');
  }
  public set googleServiceAccountKey(value: string) {
    this._googleServiceAccountKey = value;
  }
  public resetGoogleServiceAccountKey() {
    this._googleServiceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountKeyInput() {
    return this._googleServiceAccountKey;
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

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // local_max_space - computed: false, optional: true, required: false
  private _localMaxSpace?: number; 
  public get localMaxSpace() {
    return this.getNumberAttribute('local_max_space');
  }
  public set localMaxSpace(value: number) {
    this._localMaxSpace = value;
  }
  public resetLocalMaxSpace() {
    this._localMaxSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMaxSpaceInput() {
    return this._localMaxSpace;
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

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // retain - computed: false, optional: true, required: false
  private _retain?: number; 
  public get retain() {
    return this.getNumberAttribute('retain');
  }
  public set retain(value: number) {
    this._retain = value;
  }
  public resetRetain() {
    this._retain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainInput() {
    return this._retain;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_s3_bucket: cdktf.stringToTerraform(this._awsS3Bucket),
      aws_s3_disable_tls: cdktf.booleanToTerraform(this._awsS3DisableTls),
      aws_s3_enable_kms: cdktf.booleanToTerraform(this._awsS3EnableKms),
      aws_s3_endpoint: cdktf.stringToTerraform(this._awsS3Endpoint),
      aws_s3_force_path_style: cdktf.booleanToTerraform(this._awsS3ForcePathStyle),
      aws_s3_kms_key: cdktf.stringToTerraform(this._awsS3KmsKey),
      aws_s3_region: cdktf.stringToTerraform(this._awsS3Region),
      aws_s3_server_side_encryption: cdktf.booleanToTerraform(this._awsS3ServerSideEncryption),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      aws_session_token: cdktf.stringToTerraform(this._awsSessionToken),
      azure_account_key: cdktf.stringToTerraform(this._azureAccountKey),
      azure_account_name: cdktf.stringToTerraform(this._azureAccountName),
      azure_blob_environment: cdktf.stringToTerraform(this._azureBlobEnvironment),
      azure_container_name: cdktf.stringToTerraform(this._azureContainerName),
      azure_endpoint: cdktf.stringToTerraform(this._azureEndpoint),
      file_prefix: cdktf.stringToTerraform(this._filePrefix),
      google_disable_tls: cdktf.booleanToTerraform(this._googleDisableTls),
      google_endpoint: cdktf.stringToTerraform(this._googleEndpoint),
      google_gcs_bucket: cdktf.stringToTerraform(this._googleGcsBucket),
      google_service_account_key: cdktf.stringToTerraform(this._googleServiceAccountKey),
      id: cdktf.stringToTerraform(this._id),
      interval_seconds: cdktf.numberToTerraform(this._intervalSeconds),
      local_max_space: cdktf.numberToTerraform(this._localMaxSpace),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      retain: cdktf.numberToTerraform(this._retain),
      storage_type: cdktf.stringToTerraform(this._storageType),
    };
  }
}
