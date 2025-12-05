# `raftSnapshotAgentConfig` Submodule <a name="`raftSnapshotAgentConfig` Submodule" id="@cdktf/provider-vault.raftSnapshotAgentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftSnapshotAgentConfig <a name="RaftSnapshotAgentConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config vault_raft_snapshot_agent_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfig;

RaftSnapshotAgentConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .intervalSeconds(java.lang.Number)
    .name(java.lang.String)
    .pathPrefix(java.lang.String)
    .storageType(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsS3Bucket(java.lang.String)
//  .awsS3DisableTls(java.lang.Boolean|IResolvable)
//  .awsS3EnableKms(java.lang.Boolean|IResolvable)
//  .awsS3Endpoint(java.lang.String)
//  .awsS3ForcePathStyle(java.lang.Boolean|IResolvable)
//  .awsS3KmsKey(java.lang.String)
//  .awsS3Region(java.lang.String)
//  .awsS3ServerSideEncryption(java.lang.Boolean|IResolvable)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .azureAccountKey(java.lang.String)
//  .azureAccountName(java.lang.String)
//  .azureBlobEnvironment(java.lang.String)
//  .azureContainerName(java.lang.String)
//  .azureEndpoint(java.lang.String)
//  .filePrefix(java.lang.String)
//  .googleDisableTls(java.lang.Boolean|IResolvable)
//  .googleEndpoint(java.lang.String)
//  .googleGcsBucket(java.lang.String)
//  .googleServiceAccountKey(java.lang.String)
//  .id(java.lang.String)
//  .localMaxSpace(java.lang.Number)
//  .namespace(java.lang.String)
//  .retain(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | The directory or bucket prefix to to use. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Bucket">awsS3Bucket</a></code> | <code>java.lang.String</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3DisableTls">awsS3DisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3EnableKms">awsS3EnableKms</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Endpoint">awsS3Endpoint</a></code> | <code>java.lang.String</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ForcePathStyle">awsS3ForcePathStyle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3KmsKey">awsS3KmsKey</a></code> | <code>java.lang.String</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Region">awsS3Region</a></code> | <code>java.lang.String</code> | AWS region bucket is in. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ServerSideEncryption">awsS3ServerSideEncryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | AWS session token. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountKey">azureAccountKey</a></code> | <code>java.lang.String</code> | Azure account key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountName">azureAccountName</a></code> | <code>java.lang.String</code> | Azure account name. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureBlobEnvironment">azureBlobEnvironment</a></code> | <code>java.lang.String</code> | Azure blob environment. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureContainerName">azureContainerName</a></code> | <code>java.lang.String</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureEndpoint">azureEndpoint</a></code> | <code>java.lang.String</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.filePrefix">filePrefix</a></code> | <code>java.lang.String</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleDisableTls">googleDisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleEndpoint">googleEndpoint</a></code> | <code>java.lang.String</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleGcsBucket">googleGcsBucket</a></code> | <code>java.lang.String</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleServiceAccountKey">googleServiceAccountKey</a></code> | <code>java.lang.String</code> | Google service account key in JSON format. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.localMaxSpace">localMaxSpace</a></code> | <code>java.lang.Number</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.retain">retain</a></code> | <code>java.lang.Number</code> | How many snapshots are to be kept. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.intervalSeconds"></a>

- *Type:* java.lang.Number

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.pathPrefix"></a>

- *Type:* java.lang.String

The directory or bucket prefix to to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsAccessKeyId"></a>

- *Type:* java.lang.String

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `awsS3Bucket`<sup>Optional</sup> <a name="awsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Bucket"></a>

- *Type:* java.lang.String

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `awsS3DisableTls`<sup>Optional</sup> <a name="awsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3DisableTls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `awsS3EnableKms`<sup>Optional</sup> <a name="awsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3EnableKms"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `awsS3Endpoint`<sup>Optional</sup> <a name="awsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Endpoint"></a>

- *Type:* java.lang.String

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `awsS3ForcePathStyle`<sup>Optional</sup> <a name="awsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ForcePathStyle"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `awsS3KmsKey`<sup>Optional</sup> <a name="awsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3KmsKey"></a>

- *Type:* java.lang.String

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `awsS3Region`<sup>Optional</sup> <a name="awsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Region"></a>

- *Type:* java.lang.String

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `awsS3ServerSideEncryption`<sup>Optional</sup> <a name="awsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ServerSideEncryption"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSecretAccessKey"></a>

- *Type:* java.lang.String

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSessionToken"></a>

- *Type:* java.lang.String

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `azureAccountKey`<sup>Optional</sup> <a name="azureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountKey"></a>

- *Type:* java.lang.String

Azure account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `azureAccountName`<sup>Optional</sup> <a name="azureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountName"></a>

- *Type:* java.lang.String

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `azureBlobEnvironment`<sup>Optional</sup> <a name="azureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureBlobEnvironment"></a>

- *Type:* java.lang.String

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `azureContainerName`<sup>Optional</sup> <a name="azureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureContainerName"></a>

- *Type:* java.lang.String

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `azureEndpoint`<sup>Optional</sup> <a name="azureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureEndpoint"></a>

- *Type:* java.lang.String

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `filePrefix`<sup>Optional</sup> <a name="filePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.filePrefix"></a>

- *Type:* java.lang.String

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `googleDisableTls`<sup>Optional</sup> <a name="googleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleDisableTls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `googleEndpoint`<sup>Optional</sup> <a name="googleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleEndpoint"></a>

- *Type:* java.lang.String

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `googleGcsBucket`<sup>Optional</sup> <a name="googleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleGcsBucket"></a>

- *Type:* java.lang.String

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `googleServiceAccountKey`<sup>Optional</sup> <a name="googleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleServiceAccountKey"></a>

- *Type:* java.lang.String

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localMaxSpace`<sup>Optional</sup> <a name="localMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.localMaxSpace"></a>

- *Type:* java.lang.Number

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `retain`<sup>Optional</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.retain"></a>

- *Type:* java.lang.Number

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId"></a>

```java
public void resetAwsAccessKeyId()
```

##### `resetAwsS3Bucket` <a name="resetAwsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket"></a>

```java
public void resetAwsS3Bucket()
```

##### `resetAwsS3DisableTls` <a name="resetAwsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls"></a>

```java
public void resetAwsS3DisableTls()
```

##### `resetAwsS3EnableKms` <a name="resetAwsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms"></a>

```java
public void resetAwsS3EnableKms()
```

##### `resetAwsS3Endpoint` <a name="resetAwsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint"></a>

```java
public void resetAwsS3Endpoint()
```

##### `resetAwsS3ForcePathStyle` <a name="resetAwsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle"></a>

```java
public void resetAwsS3ForcePathStyle()
```

##### `resetAwsS3KmsKey` <a name="resetAwsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey"></a>

```java
public void resetAwsS3KmsKey()
```

##### `resetAwsS3Region` <a name="resetAwsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region"></a>

```java
public void resetAwsS3Region()
```

##### `resetAwsS3ServerSideEncryption` <a name="resetAwsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption"></a>

```java
public void resetAwsS3ServerSideEncryption()
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey"></a>

```java
public void resetAwsSecretAccessKey()
```

##### `resetAwsSessionToken` <a name="resetAwsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken"></a>

```java
public void resetAwsSessionToken()
```

##### `resetAzureAccountKey` <a name="resetAzureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey"></a>

```java
public void resetAzureAccountKey()
```

##### `resetAzureAccountName` <a name="resetAzureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName"></a>

```java
public void resetAzureAccountName()
```

##### `resetAzureBlobEnvironment` <a name="resetAzureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment"></a>

```java
public void resetAzureBlobEnvironment()
```

##### `resetAzureContainerName` <a name="resetAzureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName"></a>

```java
public void resetAzureContainerName()
```

##### `resetAzureEndpoint` <a name="resetAzureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint"></a>

```java
public void resetAzureEndpoint()
```

##### `resetFilePrefix` <a name="resetFilePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix"></a>

```java
public void resetFilePrefix()
```

##### `resetGoogleDisableTls` <a name="resetGoogleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls"></a>

```java
public void resetGoogleDisableTls()
```

##### `resetGoogleEndpoint` <a name="resetGoogleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint"></a>

```java
public void resetGoogleEndpoint()
```

##### `resetGoogleGcsBucket` <a name="resetGoogleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket"></a>

```java
public void resetGoogleGcsBucket()
```

##### `resetGoogleServiceAccountKey` <a name="resetGoogleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey"></a>

```java
public void resetGoogleServiceAccountKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLocalMaxSpace` <a name="resetLocalMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace"></a>

```java
public void resetLocalMaxSpace()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRetain` <a name="resetRetain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain"></a>

```java
public void resetRetain()
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

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfig;

RaftSnapshotAgentConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfig;

RaftSnapshotAgentConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfig;

RaftSnapshotAgentConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfig;

RaftSnapshotAgentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RaftSnapshotAgentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RaftSnapshotAgentConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RaftSnapshotAgentConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RaftSnapshotAgentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RaftSnapshotAgentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput">awsS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput">awsS3DisableTlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput">awsS3EnableKmsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput">awsS3EndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput">awsS3ForcePathStyleInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput">awsS3KmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput">awsS3RegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput">awsS3ServerSideEncryptionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput">awsSessionTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput">azureAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput">azureAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput">azureBlobEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput">azureContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput">azureEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput">filePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput">googleDisableTlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput">googleEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput">googleGcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput">googleServiceAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput">localMaxSpaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput">retainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket">awsS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls">awsS3DisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms">awsS3EnableKms</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint">awsS3Endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle">awsS3ForcePathStyle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey">awsS3KmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region">awsS3Region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption">awsS3ServerSideEncryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey">azureAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName">azureAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment">azureBlobEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName">azureContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint">azureEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix">filePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls">googleDisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint">googleEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket">googleGcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey">googleServiceAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace">localMaxSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain">retain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput"></a>

```java
public java.lang.String getAwsAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `awsS3BucketInput`<sup>Optional</sup> <a name="awsS3BucketInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput"></a>

```java
public java.lang.String getAwsS3BucketInput();
```

- *Type:* java.lang.String

---

##### `awsS3DisableTlsInput`<sup>Optional</sup> <a name="awsS3DisableTlsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3DisableTlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3EnableKmsInput`<sup>Optional</sup> <a name="awsS3EnableKmsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3EnableKmsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3EndpointInput`<sup>Optional</sup> <a name="awsS3EndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput"></a>

```java
public java.lang.String getAwsS3EndpointInput();
```

- *Type:* java.lang.String

---

##### `awsS3ForcePathStyleInput`<sup>Optional</sup> <a name="awsS3ForcePathStyleInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ForcePathStyleInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3KmsKeyInput`<sup>Optional</sup> <a name="awsS3KmsKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput"></a>

```java
public java.lang.String getAwsS3KmsKeyInput();
```

- *Type:* java.lang.String

---

##### `awsS3RegionInput`<sup>Optional</sup> <a name="awsS3RegionInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput"></a>

```java
public java.lang.String getAwsS3RegionInput();
```

- *Type:* java.lang.String

---

##### `awsS3ServerSideEncryptionInput`<sup>Optional</sup> <a name="awsS3ServerSideEncryptionInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ServerSideEncryptionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput"></a>

```java
public java.lang.String getAwsSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `awsSessionTokenInput`<sup>Optional</sup> <a name="awsSessionTokenInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput"></a>

```java
public java.lang.String getAwsSessionTokenInput();
```

- *Type:* java.lang.String

---

##### `azureAccountKeyInput`<sup>Optional</sup> <a name="azureAccountKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput"></a>

```java
public java.lang.String getAzureAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `azureAccountNameInput`<sup>Optional</sup> <a name="azureAccountNameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput"></a>

```java
public java.lang.String getAzureAccountNameInput();
```

- *Type:* java.lang.String

---

##### `azureBlobEnvironmentInput`<sup>Optional</sup> <a name="azureBlobEnvironmentInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput"></a>

```java
public java.lang.String getAzureBlobEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `azureContainerNameInput`<sup>Optional</sup> <a name="azureContainerNameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput"></a>

```java
public java.lang.String getAzureContainerNameInput();
```

- *Type:* java.lang.String

---

##### `azureEndpointInput`<sup>Optional</sup> <a name="azureEndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput"></a>

```java
public java.lang.String getAzureEndpointInput();
```

- *Type:* java.lang.String

---

##### `filePrefixInput`<sup>Optional</sup> <a name="filePrefixInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput"></a>

```java
public java.lang.String getFilePrefixInput();
```

- *Type:* java.lang.String

---

##### `googleDisableTlsInput`<sup>Optional</sup> <a name="googleDisableTlsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getGoogleDisableTlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `googleEndpointInput`<sup>Optional</sup> <a name="googleEndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput"></a>

```java
public java.lang.String getGoogleEndpointInput();
```

- *Type:* java.lang.String

---

##### `googleGcsBucketInput`<sup>Optional</sup> <a name="googleGcsBucketInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput"></a>

```java
public java.lang.String getGoogleGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountKeyInput`<sup>Optional</sup> <a name="googleServiceAccountKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput"></a>

```java
public java.lang.String getGoogleServiceAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `localMaxSpaceInput`<sup>Optional</sup> <a name="localMaxSpaceInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput"></a>

```java
public java.lang.Number getLocalMaxSpaceInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `retainInput`<sup>Optional</sup> <a name="retainInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput"></a>

```java
public java.lang.Number getRetainInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `awsS3Bucket`<sup>Required</sup> <a name="awsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket"></a>

```java
public java.lang.String getAwsS3Bucket();
```

- *Type:* java.lang.String

---

##### `awsS3DisableTls`<sup>Required</sup> <a name="awsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3DisableTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3EnableKms`<sup>Required</sup> <a name="awsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3EnableKms();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3Endpoint`<sup>Required</sup> <a name="awsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint"></a>

```java
public java.lang.String getAwsS3Endpoint();
```

- *Type:* java.lang.String

---

##### `awsS3ForcePathStyle`<sup>Required</sup> <a name="awsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ForcePathStyle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsS3KmsKey`<sup>Required</sup> <a name="awsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey"></a>

```java
public java.lang.String getAwsS3KmsKey();
```

- *Type:* java.lang.String

---

##### `awsS3Region`<sup>Required</sup> <a name="awsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region"></a>

```java
public java.lang.String getAwsS3Region();
```

- *Type:* java.lang.String

---

##### `awsS3ServerSideEncryption`<sup>Required</sup> <a name="awsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ServerSideEncryption();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `awsSecretAccessKey`<sup>Required</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `awsSessionToken`<sup>Required</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

---

##### `azureAccountKey`<sup>Required</sup> <a name="azureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey"></a>

```java
public java.lang.String getAzureAccountKey();
```

- *Type:* java.lang.String

---

##### `azureAccountName`<sup>Required</sup> <a name="azureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName"></a>

```java
public java.lang.String getAzureAccountName();
```

- *Type:* java.lang.String

---

##### `azureBlobEnvironment`<sup>Required</sup> <a name="azureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment"></a>

```java
public java.lang.String getAzureBlobEnvironment();
```

- *Type:* java.lang.String

---

##### `azureContainerName`<sup>Required</sup> <a name="azureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName"></a>

```java
public java.lang.String getAzureContainerName();
```

- *Type:* java.lang.String

---

##### `azureEndpoint`<sup>Required</sup> <a name="azureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint"></a>

```java
public java.lang.String getAzureEndpoint();
```

- *Type:* java.lang.String

---

##### `filePrefix`<sup>Required</sup> <a name="filePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix"></a>

```java
public java.lang.String getFilePrefix();
```

- *Type:* java.lang.String

---

##### `googleDisableTls`<sup>Required</sup> <a name="googleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls"></a>

```java
public java.lang.Boolean|IResolvable getGoogleDisableTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `googleEndpoint`<sup>Required</sup> <a name="googleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint"></a>

```java
public java.lang.String getGoogleEndpoint();
```

- *Type:* java.lang.String

---

##### `googleGcsBucket`<sup>Required</sup> <a name="googleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket"></a>

```java
public java.lang.String getGoogleGcsBucket();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountKey`<sup>Required</sup> <a name="googleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey"></a>

```java
public java.lang.String getGoogleServiceAccountKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `localMaxSpace`<sup>Required</sup> <a name="localMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace"></a>

```java
public java.lang.Number getLocalMaxSpace();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `retain`<sup>Required</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain"></a>

```java
public java.lang.Number getRetain();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RaftSnapshotAgentConfigConfig <a name="RaftSnapshotAgentConfigConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.raft_snapshot_agent_config.RaftSnapshotAgentConfigConfig;

RaftSnapshotAgentConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .intervalSeconds(java.lang.Number)
    .name(java.lang.String)
    .pathPrefix(java.lang.String)
    .storageType(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsS3Bucket(java.lang.String)
//  .awsS3DisableTls(java.lang.Boolean|IResolvable)
//  .awsS3EnableKms(java.lang.Boolean|IResolvable)
//  .awsS3Endpoint(java.lang.String)
//  .awsS3ForcePathStyle(java.lang.Boolean|IResolvable)
//  .awsS3KmsKey(java.lang.String)
//  .awsS3Region(java.lang.String)
//  .awsS3ServerSideEncryption(java.lang.Boolean|IResolvable)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .azureAccountKey(java.lang.String)
//  .azureAccountName(java.lang.String)
//  .azureBlobEnvironment(java.lang.String)
//  .azureContainerName(java.lang.String)
//  .azureEndpoint(java.lang.String)
//  .filePrefix(java.lang.String)
//  .googleDisableTls(java.lang.Boolean|IResolvable)
//  .googleEndpoint(java.lang.String)
//  .googleGcsBucket(java.lang.String)
//  .googleServiceAccountKey(java.lang.String)
//  .id(java.lang.String)
//  .localMaxSpace(java.lang.Number)
//  .namespace(java.lang.String)
//  .retain(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | The directory or bucket prefix to to use. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket">awsS3Bucket</a></code> | <code>java.lang.String</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls">awsS3DisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms">awsS3EnableKms</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint">awsS3Endpoint</a></code> | <code>java.lang.String</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle">awsS3ForcePathStyle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey">awsS3KmsKey</a></code> | <code>java.lang.String</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region">awsS3Region</a></code> | <code>java.lang.String</code> | AWS region bucket is in. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption">awsS3ServerSideEncryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | AWS session token. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey">azureAccountKey</a></code> | <code>java.lang.String</code> | Azure account key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName">azureAccountName</a></code> | <code>java.lang.String</code> | Azure account name. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment">azureBlobEnvironment</a></code> | <code>java.lang.String</code> | Azure blob environment. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName">azureContainerName</a></code> | <code>java.lang.String</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint">azureEndpoint</a></code> | <code>java.lang.String</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix">filePrefix</a></code> | <code>java.lang.String</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls">googleDisableTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint">googleEndpoint</a></code> | <code>java.lang.String</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket">googleGcsBucket</a></code> | <code>java.lang.String</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey">googleServiceAccountKey</a></code> | <code>java.lang.String</code> | Google service account key in JSON format. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace">localMaxSpace</a></code> | <code>java.lang.Number</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain">retain</a></code> | <code>java.lang.Number</code> | How many snapshots are to be kept. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

The directory or bucket prefix to to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `awsS3Bucket`<sup>Optional</sup> <a name="awsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket"></a>

```java
public java.lang.String getAwsS3Bucket();
```

- *Type:* java.lang.String

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `awsS3DisableTls`<sup>Optional</sup> <a name="awsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3DisableTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `awsS3EnableKms`<sup>Optional</sup> <a name="awsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3EnableKms();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `awsS3Endpoint`<sup>Optional</sup> <a name="awsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint"></a>

```java
public java.lang.String getAwsS3Endpoint();
```

- *Type:* java.lang.String

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `awsS3ForcePathStyle`<sup>Optional</sup> <a name="awsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ForcePathStyle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `awsS3KmsKey`<sup>Optional</sup> <a name="awsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey"></a>

```java
public java.lang.String getAwsS3KmsKey();
```

- *Type:* java.lang.String

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `awsS3Region`<sup>Optional</sup> <a name="awsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region"></a>

```java
public java.lang.String getAwsS3Region();
```

- *Type:* java.lang.String

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `awsS3ServerSideEncryption`<sup>Optional</sup> <a name="awsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption"></a>

```java
public java.lang.Boolean|IResolvable getAwsS3ServerSideEncryption();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `azureAccountKey`<sup>Optional</sup> <a name="azureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey"></a>

```java
public java.lang.String getAzureAccountKey();
```

- *Type:* java.lang.String

Azure account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `azureAccountName`<sup>Optional</sup> <a name="azureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName"></a>

```java
public java.lang.String getAzureAccountName();
```

- *Type:* java.lang.String

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `azureBlobEnvironment`<sup>Optional</sup> <a name="azureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment"></a>

```java
public java.lang.String getAzureBlobEnvironment();
```

- *Type:* java.lang.String

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `azureContainerName`<sup>Optional</sup> <a name="azureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName"></a>

```java
public java.lang.String getAzureContainerName();
```

- *Type:* java.lang.String

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `azureEndpoint`<sup>Optional</sup> <a name="azureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint"></a>

```java
public java.lang.String getAzureEndpoint();
```

- *Type:* java.lang.String

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `filePrefix`<sup>Optional</sup> <a name="filePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix"></a>

```java
public java.lang.String getFilePrefix();
```

- *Type:* java.lang.String

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `googleDisableTls`<sup>Optional</sup> <a name="googleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls"></a>

```java
public java.lang.Boolean|IResolvable getGoogleDisableTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `googleEndpoint`<sup>Optional</sup> <a name="googleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint"></a>

```java
public java.lang.String getGoogleEndpoint();
```

- *Type:* java.lang.String

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `googleGcsBucket`<sup>Optional</sup> <a name="googleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket"></a>

```java
public java.lang.String getGoogleGcsBucket();
```

- *Type:* java.lang.String

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `googleServiceAccountKey`<sup>Optional</sup> <a name="googleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey"></a>

```java
public java.lang.String getGoogleServiceAccountKey();
```

- *Type:* java.lang.String

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localMaxSpace`<sup>Optional</sup> <a name="localMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace"></a>

```java
public java.lang.Number getLocalMaxSpace();
```

- *Type:* java.lang.Number

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `retain`<sup>Optional</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain"></a>

```java
public java.lang.Number getRetain();
```

- *Type:* java.lang.Number

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---



