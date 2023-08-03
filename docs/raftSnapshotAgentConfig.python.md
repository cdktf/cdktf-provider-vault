# `vault_raft_snapshot_agent_config`

Refer to the Terraform Registory for docs: [`vault_raft_snapshot_agent_config`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config).

# `raftSnapshotAgentConfig` Submodule <a name="`raftSnapshotAgentConfig` Submodule" id="@cdktf/provider-vault.raftSnapshotAgentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftSnapshotAgentConfig <a name="RaftSnapshotAgentConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config vault_raft_snapshot_agent_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import raft_snapshot_agent_config

raftSnapshotAgentConfig.RaftSnapshotAgentConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interval_seconds: typing.Union[int, float],
  name: str,
  path_prefix: str,
  storage_type: str,
  aws_access_key_id: str = None,
  aws_s3_bucket: str = None,
  aws_s3_disable_tls: typing.Union[bool, IResolvable] = None,
  aws_s3_enable_kms: typing.Union[bool, IResolvable] = None,
  aws_s3_endpoint: str = None,
  aws_s3_force_path_style: typing.Union[bool, IResolvable] = None,
  aws_s3_kms_key: str = None,
  aws_s3_region: str = None,
  aws_s3_server_side_encryption: typing.Union[bool, IResolvable] = None,
  aws_secret_access_key: str = None,
  aws_session_token: str = None,
  azure_account_key: str = None,
  azure_account_name: str = None,
  azure_blob_environment: str = None,
  azure_container_name: str = None,
  azure_endpoint: str = None,
  file_prefix: str = None,
  google_disable_tls: typing.Union[bool, IResolvable] = None,
  google_endpoint: str = None,
  google_gcs_bucket: str = None,
  google_service_account_key: str = None,
  id: str = None,
  local_max_space: typing.Union[int, float] = None,
  namespace: str = None,
  retain: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.pathPrefix">path_prefix</a></code> | <code>str</code> | The directory or bucket prefix to to use. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Bucket">aws_s3_bucket</a></code> | <code>str</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3DisableTls">aws_s3_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3EnableKms">aws_s3_enable_kms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Endpoint">aws_s3_endpoint</a></code> | <code>str</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ForcePathStyle">aws_s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3KmsKey">aws_s3_kms_key</a></code> | <code>str</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Region">aws_s3_region</a></code> | <code>str</code> | AWS region bucket is in. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ServerSideEncryption">aws_s3_server_side_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSessionToken">aws_session_token</a></code> | <code>str</code> | AWS session token. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountKey">azure_account_key</a></code> | <code>str</code> | Azure account key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountName">azure_account_name</a></code> | <code>str</code> | Azure account name. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureBlobEnvironment">azure_blob_environment</a></code> | <code>str</code> | Azure blob environment. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureContainerName">azure_container_name</a></code> | <code>str</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureEndpoint">azure_endpoint</a></code> | <code>str</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.filePrefix">file_prefix</a></code> | <code>str</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleDisableTls">google_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleEndpoint">google_endpoint</a></code> | <code>str</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleGcsBucket">google_gcs_bucket</a></code> | <code>str</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleServiceAccountKey">google_service_account_key</a></code> | <code>str</code> | Google service account key in JSON format. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.localMaxSpace">local_max_space</a></code> | <code>typing.Union[int, float]</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.retain">retain</a></code> | <code>typing.Union[int, float]</code> | How many snapshots are to be kept. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.name"></a>

- *Type:* str

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.pathPrefix"></a>

- *Type:* str

The directory or bucket prefix to to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.storageType"></a>

- *Type:* str

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsAccessKeyId"></a>

- *Type:* str

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `aws_s3_bucket`<sup>Optional</sup> <a name="aws_s3_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Bucket"></a>

- *Type:* str

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `aws_s3_disable_tls`<sup>Optional</sup> <a name="aws_s3_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3DisableTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `aws_s3_enable_kms`<sup>Optional</sup> <a name="aws_s3_enable_kms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3EnableKms"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `aws_s3_endpoint`<sup>Optional</sup> <a name="aws_s3_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Endpoint"></a>

- *Type:* str

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `aws_s3_force_path_style`<sup>Optional</sup> <a name="aws_s3_force_path_style" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ForcePathStyle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `aws_s3_kms_key`<sup>Optional</sup> <a name="aws_s3_kms_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3KmsKey"></a>

- *Type:* str

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `aws_s3_region`<sup>Optional</sup> <a name="aws_s3_region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3Region"></a>

- *Type:* str

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `aws_s3_server_side_encryption`<sup>Optional</sup> <a name="aws_s3_server_side_encryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsS3ServerSideEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSecretAccessKey"></a>

- *Type:* str

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.awsSessionToken"></a>

- *Type:* str

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `azure_account_key`<sup>Optional</sup> <a name="azure_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountKey"></a>

- *Type:* str

Azure account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `azure_account_name`<sup>Optional</sup> <a name="azure_account_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureAccountName"></a>

- *Type:* str

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `azure_blob_environment`<sup>Optional</sup> <a name="azure_blob_environment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureBlobEnvironment"></a>

- *Type:* str

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `azure_container_name`<sup>Optional</sup> <a name="azure_container_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureContainerName"></a>

- *Type:* str

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `azure_endpoint`<sup>Optional</sup> <a name="azure_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.azureEndpoint"></a>

- *Type:* str

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `file_prefix`<sup>Optional</sup> <a name="file_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.filePrefix"></a>

- *Type:* str

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `google_disable_tls`<sup>Optional</sup> <a name="google_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleDisableTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `google_endpoint`<sup>Optional</sup> <a name="google_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleEndpoint"></a>

- *Type:* str

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `google_gcs_bucket`<sup>Optional</sup> <a name="google_gcs_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleGcsBucket"></a>

- *Type:* str

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `google_service_account_key`<sup>Optional</sup> <a name="google_service_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.googleServiceAccountKey"></a>

- *Type:* str

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_max_space`<sup>Optional</sup> <a name="local_max_space" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.localMaxSpace"></a>

- *Type:* typing.Union[int, float]

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `retain`<sup>Optional</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.retain"></a>

- *Type:* typing.Union[int, float]

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId">reset_aws_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket">reset_aws_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls">reset_aws_s3_disable_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms">reset_aws_s3_enable_kms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint">reset_aws_s3_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle">reset_aws_s3_force_path_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey">reset_aws_s3_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region">reset_aws_s3_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption">reset_aws_s3_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey">reset_aws_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken">reset_aws_session_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey">reset_azure_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName">reset_azure_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment">reset_azure_blob_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName">reset_azure_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint">reset_azure_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix">reset_file_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls">reset_google_disable_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint">reset_google_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket">reset_google_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey">reset_google_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace">reset_local_max_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain">reset_retain</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_aws_access_key_id` <a name="reset_aws_access_key_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId"></a>

```python
def reset_aws_access_key_id() -> None
```

##### `reset_aws_s3_bucket` <a name="reset_aws_s3_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket"></a>

```python
def reset_aws_s3_bucket() -> None
```

##### `reset_aws_s3_disable_tls` <a name="reset_aws_s3_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls"></a>

```python
def reset_aws_s3_disable_tls() -> None
```

##### `reset_aws_s3_enable_kms` <a name="reset_aws_s3_enable_kms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms"></a>

```python
def reset_aws_s3_enable_kms() -> None
```

##### `reset_aws_s3_endpoint` <a name="reset_aws_s3_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint"></a>

```python
def reset_aws_s3_endpoint() -> None
```

##### `reset_aws_s3_force_path_style` <a name="reset_aws_s3_force_path_style" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle"></a>

```python
def reset_aws_s3_force_path_style() -> None
```

##### `reset_aws_s3_kms_key` <a name="reset_aws_s3_kms_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey"></a>

```python
def reset_aws_s3_kms_key() -> None
```

##### `reset_aws_s3_region` <a name="reset_aws_s3_region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region"></a>

```python
def reset_aws_s3_region() -> None
```

##### `reset_aws_s3_server_side_encryption` <a name="reset_aws_s3_server_side_encryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption"></a>

```python
def reset_aws_s3_server_side_encryption() -> None
```

##### `reset_aws_secret_access_key` <a name="reset_aws_secret_access_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey"></a>

```python
def reset_aws_secret_access_key() -> None
```

##### `reset_aws_session_token` <a name="reset_aws_session_token" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken"></a>

```python
def reset_aws_session_token() -> None
```

##### `reset_azure_account_key` <a name="reset_azure_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey"></a>

```python
def reset_azure_account_key() -> None
```

##### `reset_azure_account_name` <a name="reset_azure_account_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName"></a>

```python
def reset_azure_account_name() -> None
```

##### `reset_azure_blob_environment` <a name="reset_azure_blob_environment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment"></a>

```python
def reset_azure_blob_environment() -> None
```

##### `reset_azure_container_name` <a name="reset_azure_container_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName"></a>

```python
def reset_azure_container_name() -> None
```

##### `reset_azure_endpoint` <a name="reset_azure_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint"></a>

```python
def reset_azure_endpoint() -> None
```

##### `reset_file_prefix` <a name="reset_file_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix"></a>

```python
def reset_file_prefix() -> None
```

##### `reset_google_disable_tls` <a name="reset_google_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls"></a>

```python
def reset_google_disable_tls() -> None
```

##### `reset_google_endpoint` <a name="reset_google_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint"></a>

```python
def reset_google_endpoint() -> None
```

##### `reset_google_gcs_bucket` <a name="reset_google_gcs_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket"></a>

```python
def reset_google_gcs_bucket() -> None
```

##### `reset_google_service_account_key` <a name="reset_google_service_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey"></a>

```python
def reset_google_service_account_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_max_space` <a name="reset_local_max_space" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace"></a>

```python
def reset_local_max_space() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_retain` <a name="reset_retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain"></a>

```python
def reset_retain() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import raft_snapshot_agent_config

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import raft_snapshot_agent_config

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import raft_snapshot_agent_config

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput">aws_access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput">aws_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput">aws_s3_disable_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput">aws_s3_enable_kms_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput">aws_s3_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput">aws_s3_force_path_style_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput">aws_s3_kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput">aws_s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput">aws_s3_server_side_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput">aws_secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput">aws_session_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput">azure_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput">azure_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput">azure_blob_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput">azure_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput">azure_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput">file_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput">google_disable_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput">google_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput">google_gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput">google_service_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput">local_max_space_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput">retain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket">aws_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls">aws_s3_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms">aws_s3_enable_kms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint">aws_s3_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle">aws_s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey">aws_s3_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region">aws_s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption">aws_s3_server_side_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken">aws_session_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey">azure_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName">azure_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment">azure_blob_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName">azure_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint">azure_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix">file_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls">google_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint">google_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket">google_gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey">google_service_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace">local_max_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain">retain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_access_key_id_input`<sup>Optional</sup> <a name="aws_access_key_id_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput"></a>

```python
aws_access_key_id_input: str
```

- *Type:* str

---

##### `aws_s3_bucket_input`<sup>Optional</sup> <a name="aws_s3_bucket_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput"></a>

```python
aws_s3_bucket_input: str
```

- *Type:* str

---

##### `aws_s3_disable_tls_input`<sup>Optional</sup> <a name="aws_s3_disable_tls_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput"></a>

```python
aws_s3_disable_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_enable_kms_input`<sup>Optional</sup> <a name="aws_s3_enable_kms_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput"></a>

```python
aws_s3_enable_kms_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_endpoint_input`<sup>Optional</sup> <a name="aws_s3_endpoint_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput"></a>

```python
aws_s3_endpoint_input: str
```

- *Type:* str

---

##### `aws_s3_force_path_style_input`<sup>Optional</sup> <a name="aws_s3_force_path_style_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput"></a>

```python
aws_s3_force_path_style_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_kms_key_input`<sup>Optional</sup> <a name="aws_s3_kms_key_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput"></a>

```python
aws_s3_kms_key_input: str
```

- *Type:* str

---

##### `aws_s3_region_input`<sup>Optional</sup> <a name="aws_s3_region_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput"></a>

```python
aws_s3_region_input: str
```

- *Type:* str

---

##### `aws_s3_server_side_encryption_input`<sup>Optional</sup> <a name="aws_s3_server_side_encryption_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput"></a>

```python
aws_s3_server_side_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_secret_access_key_input`<sup>Optional</sup> <a name="aws_secret_access_key_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput"></a>

```python
aws_secret_access_key_input: str
```

- *Type:* str

---

##### `aws_session_token_input`<sup>Optional</sup> <a name="aws_session_token_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput"></a>

```python
aws_session_token_input: str
```

- *Type:* str

---

##### `azure_account_key_input`<sup>Optional</sup> <a name="azure_account_key_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput"></a>

```python
azure_account_key_input: str
```

- *Type:* str

---

##### `azure_account_name_input`<sup>Optional</sup> <a name="azure_account_name_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput"></a>

```python
azure_account_name_input: str
```

- *Type:* str

---

##### `azure_blob_environment_input`<sup>Optional</sup> <a name="azure_blob_environment_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput"></a>

```python
azure_blob_environment_input: str
```

- *Type:* str

---

##### `azure_container_name_input`<sup>Optional</sup> <a name="azure_container_name_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput"></a>

```python
azure_container_name_input: str
```

- *Type:* str

---

##### `azure_endpoint_input`<sup>Optional</sup> <a name="azure_endpoint_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput"></a>

```python
azure_endpoint_input: str
```

- *Type:* str

---

##### `file_prefix_input`<sup>Optional</sup> <a name="file_prefix_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput"></a>

```python
file_prefix_input: str
```

- *Type:* str

---

##### `google_disable_tls_input`<sup>Optional</sup> <a name="google_disable_tls_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput"></a>

```python
google_disable_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `google_endpoint_input`<sup>Optional</sup> <a name="google_endpoint_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput"></a>

```python
google_endpoint_input: str
```

- *Type:* str

---

##### `google_gcs_bucket_input`<sup>Optional</sup> <a name="google_gcs_bucket_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput"></a>

```python
google_gcs_bucket_input: str
```

- *Type:* str

---

##### `google_service_account_key_input`<sup>Optional</sup> <a name="google_service_account_key_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput"></a>

```python
google_service_account_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_max_space_input`<sup>Optional</sup> <a name="local_max_space_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput"></a>

```python
local_max_space_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `retain_input`<sup>Optional</sup> <a name="retain_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput"></a>

```python
retain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `aws_access_key_id`<sup>Required</sup> <a name="aws_access_key_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

---

##### `aws_s3_bucket`<sup>Required</sup> <a name="aws_s3_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket"></a>

```python
aws_s3_bucket: str
```

- *Type:* str

---

##### `aws_s3_disable_tls`<sup>Required</sup> <a name="aws_s3_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls"></a>

```python
aws_s3_disable_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_enable_kms`<sup>Required</sup> <a name="aws_s3_enable_kms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms"></a>

```python
aws_s3_enable_kms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_endpoint`<sup>Required</sup> <a name="aws_s3_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint"></a>

```python
aws_s3_endpoint: str
```

- *Type:* str

---

##### `aws_s3_force_path_style`<sup>Required</sup> <a name="aws_s3_force_path_style" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle"></a>

```python
aws_s3_force_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_s3_kms_key`<sup>Required</sup> <a name="aws_s3_kms_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey"></a>

```python
aws_s3_kms_key: str
```

- *Type:* str

---

##### `aws_s3_region`<sup>Required</sup> <a name="aws_s3_region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region"></a>

```python
aws_s3_region: str
```

- *Type:* str

---

##### `aws_s3_server_side_encryption`<sup>Required</sup> <a name="aws_s3_server_side_encryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption"></a>

```python
aws_s3_server_side_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_secret_access_key`<sup>Required</sup> <a name="aws_secret_access_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey"></a>

```python
aws_secret_access_key: str
```

- *Type:* str

---

##### `aws_session_token`<sup>Required</sup> <a name="aws_session_token" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken"></a>

```python
aws_session_token: str
```

- *Type:* str

---

##### `azure_account_key`<sup>Required</sup> <a name="azure_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey"></a>

```python
azure_account_key: str
```

- *Type:* str

---

##### `azure_account_name`<sup>Required</sup> <a name="azure_account_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName"></a>

```python
azure_account_name: str
```

- *Type:* str

---

##### `azure_blob_environment`<sup>Required</sup> <a name="azure_blob_environment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment"></a>

```python
azure_blob_environment: str
```

- *Type:* str

---

##### `azure_container_name`<sup>Required</sup> <a name="azure_container_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName"></a>

```python
azure_container_name: str
```

- *Type:* str

---

##### `azure_endpoint`<sup>Required</sup> <a name="azure_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint"></a>

```python
azure_endpoint: str
```

- *Type:* str

---

##### `file_prefix`<sup>Required</sup> <a name="file_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix"></a>

```python
file_prefix: str
```

- *Type:* str

---

##### `google_disable_tls`<sup>Required</sup> <a name="google_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls"></a>

```python
google_disable_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `google_endpoint`<sup>Required</sup> <a name="google_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint"></a>

```python
google_endpoint: str
```

- *Type:* str

---

##### `google_gcs_bucket`<sup>Required</sup> <a name="google_gcs_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket"></a>

```python
google_gcs_bucket: str
```

- *Type:* str

---

##### `google_service_account_key`<sup>Required</sup> <a name="google_service_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey"></a>

```python
google_service_account_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_max_space`<sup>Required</sup> <a name="local_max_space" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace"></a>

```python
local_max_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `retain`<sup>Required</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain"></a>

```python
retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RaftSnapshotAgentConfigConfig <a name="RaftSnapshotAgentConfigConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import raft_snapshot_agent_config

raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interval_seconds: typing.Union[int, float],
  name: str,
  path_prefix: str,
  storage_type: str,
  aws_access_key_id: str = None,
  aws_s3_bucket: str = None,
  aws_s3_disable_tls: typing.Union[bool, IResolvable] = None,
  aws_s3_enable_kms: typing.Union[bool, IResolvable] = None,
  aws_s3_endpoint: str = None,
  aws_s3_force_path_style: typing.Union[bool, IResolvable] = None,
  aws_s3_kms_key: str = None,
  aws_s3_region: str = None,
  aws_s3_server_side_encryption: typing.Union[bool, IResolvable] = None,
  aws_secret_access_key: str = None,
  aws_session_token: str = None,
  azure_account_key: str = None,
  azure_account_name: str = None,
  azure_blob_environment: str = None,
  azure_container_name: str = None,
  azure_endpoint: str = None,
  file_prefix: str = None,
  google_disable_tls: typing.Union[bool, IResolvable] = None,
  google_endpoint: str = None,
  google_gcs_bucket: str = None,
  google_service_account_key: str = None,
  id: str = None,
  local_max_space: typing.Union[int, float] = None,
  namespace: str = None,
  retain: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name">name</a></code> | <code>str</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix">path_prefix</a></code> | <code>str</code> | The directory or bucket prefix to to use. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType">storage_type</a></code> | <code>str</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket">aws_s3_bucket</a></code> | <code>str</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls">aws_s3_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms">aws_s3_enable_kms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint">aws_s3_endpoint</a></code> | <code>str</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle">aws_s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey">aws_s3_kms_key</a></code> | <code>str</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region">aws_s3_region</a></code> | <code>str</code> | AWS region bucket is in. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption">aws_s3_server_side_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken">aws_session_token</a></code> | <code>str</code> | AWS session token. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey">azure_account_key</a></code> | <code>str</code> | Azure account key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName">azure_account_name</a></code> | <code>str</code> | Azure account name. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment">azure_blob_environment</a></code> | <code>str</code> | Azure blob environment. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName">azure_container_name</a></code> | <code>str</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint">azure_endpoint</a></code> | <code>str</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix">file_prefix</a></code> | <code>str</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls">google_disable_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint">google_endpoint</a></code> | <code>str</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket">google_gcs_bucket</a></code> | <code>str</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey">google_service_account_key</a></code> | <code>str</code> | Google service account key in JSON format. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace">local_max_space</a></code> | <code>typing.Union[int, float]</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain">retain</a></code> | <code>typing.Union[int, float]</code> | How many snapshots are to be kept. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

The directory or bucket prefix to to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `aws_s3_bucket`<sup>Optional</sup> <a name="aws_s3_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket"></a>

```python
aws_s3_bucket: str
```

- *Type:* str

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `aws_s3_disable_tls`<sup>Optional</sup> <a name="aws_s3_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls"></a>

```python
aws_s3_disable_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `aws_s3_enable_kms`<sup>Optional</sup> <a name="aws_s3_enable_kms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms"></a>

```python
aws_s3_enable_kms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `aws_s3_endpoint`<sup>Optional</sup> <a name="aws_s3_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint"></a>

```python
aws_s3_endpoint: str
```

- *Type:* str

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `aws_s3_force_path_style`<sup>Optional</sup> <a name="aws_s3_force_path_style" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle"></a>

```python
aws_s3_force_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `aws_s3_kms_key`<sup>Optional</sup> <a name="aws_s3_kms_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey"></a>

```python
aws_s3_kms_key: str
```

- *Type:* str

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `aws_s3_region`<sup>Optional</sup> <a name="aws_s3_region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region"></a>

```python
aws_s3_region: str
```

- *Type:* str

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `aws_s3_server_side_encryption`<sup>Optional</sup> <a name="aws_s3_server_side_encryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption"></a>

```python
aws_s3_server_side_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey"></a>

```python
aws_secret_access_key: str
```

- *Type:* str

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken"></a>

```python
aws_session_token: str
```

- *Type:* str

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `azure_account_key`<sup>Optional</sup> <a name="azure_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey"></a>

```python
azure_account_key: str
```

- *Type:* str

Azure account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `azure_account_name`<sup>Optional</sup> <a name="azure_account_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName"></a>

```python
azure_account_name: str
```

- *Type:* str

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `azure_blob_environment`<sup>Optional</sup> <a name="azure_blob_environment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment"></a>

```python
azure_blob_environment: str
```

- *Type:* str

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `azure_container_name`<sup>Optional</sup> <a name="azure_container_name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName"></a>

```python
azure_container_name: str
```

- *Type:* str

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `azure_endpoint`<sup>Optional</sup> <a name="azure_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint"></a>

```python
azure_endpoint: str
```

- *Type:* str

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `file_prefix`<sup>Optional</sup> <a name="file_prefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix"></a>

```python
file_prefix: str
```

- *Type:* str

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `google_disable_tls`<sup>Optional</sup> <a name="google_disable_tls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls"></a>

```python
google_disable_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `google_endpoint`<sup>Optional</sup> <a name="google_endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint"></a>

```python
google_endpoint: str
```

- *Type:* str

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `google_gcs_bucket`<sup>Optional</sup> <a name="google_gcs_bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket"></a>

```python
google_gcs_bucket: str
```

- *Type:* str

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `google_service_account_key`<sup>Optional</sup> <a name="google_service_account_key" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey"></a>

```python
google_service_account_key: str
```

- *Type:* str

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_max_space`<sup>Optional</sup> <a name="local_max_space" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace"></a>

```python
local_max_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `retain`<sup>Optional</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain"></a>

```python
retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---



