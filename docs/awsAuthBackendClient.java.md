# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktf/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClient;

AwsAuthBackendClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessKey(java.lang.String)
//  .allowedStsHeaderValues(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .ec2Endpoint(java.lang.String)
//  .iamEndpoint(java.lang.String)
//  .iamServerIdHeaderValue(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .namespace(java.lang.String)
//  .roleArn(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .secretKey(java.lang.String)
//  .stsEndpoint(java.lang.String)
//  .stsRegion(java.lang.String)
//  .useStsRegionFromClient(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.allowedStsHeaderValues">allowedStsHeaderValues</a></code> | <code>java.util.List<java.lang.String></code> | List of additional headers that are allowed to be in STS request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.ec2Endpoint">ec2Endpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamServerIdHeaderValue">iamServerIdHeaderValue</a></code> | <code>java.lang.String</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.useStsRegionFromClient">useStsRegionFromClient</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `allowedStsHeaderValues`<sup>Optional</sup> <a name="allowedStsHeaderValues" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.allowedStsHeaderValues"></a>

- *Type:* java.util.List<java.lang.String>

List of additional headers that are allowed to be in STS request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#allowed_sts_header_values AwsAuthBackendClient#allowed_sts_header_values}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#disable_automated_rotation AwsAuthBackendClient#disable_automated_rotation}

---

##### `ec2Endpoint`<sup>Optional</sup> <a name="ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.ec2Endpoint"></a>

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `iamEndpoint`<sup>Optional</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamEndpoint"></a>

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `iamServerIdHeaderValue`<sup>Optional</sup> <a name="iamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamServerIdHeaderValue"></a>

- *Type:* java.lang.String

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenAudience"></a>

- *Type:* java.lang.String

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_period AwsAuthBackendClient#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_schedule AwsAuthBackendClient#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_window AwsAuthBackendClient#rotation_window}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsEndpoint"></a>

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsRegion"></a>

- *Type:* java.lang.String

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `useStsRegionFromClient`<sup>Optional</sup> <a name="useStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.useStsRegionFromClient"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAllowedStsHeaderValues">resetAllowedStsHeaderValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint">resetEc2Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint">resetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue">resetIamServerIdHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience">resetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint">resetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion">resetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient">resetUseStsRegionFromClient</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAllowedStsHeaderValues` <a name="resetAllowedStsHeaderValues" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAllowedStsHeaderValues"></a>

```java
public void resetAllowedStsHeaderValues()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation"></a>

```java
public void resetDisableAutomatedRotation()
```

##### `resetEc2Endpoint` <a name="resetEc2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```java
public void resetEc2Endpoint()
```

##### `resetIamEndpoint` <a name="resetIamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```java
public void resetIamEndpoint()
```

##### `resetIamServerIdHeaderValue` <a name="resetIamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```java
public void resetIamServerIdHeaderValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudience` <a name="resetIdentityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience"></a>

```java
public void resetIdentityTokenAudience()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetStsEndpoint` <a name="resetStsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```java
public void resetStsEndpoint()
```

##### `resetStsRegion` <a name="resetStsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```java
public void resetStsRegion()
```

##### `resetUseStsRegionFromClient` <a name="resetUseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient"></a>

```java
public void resetUseStsRegionFromClient()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClient;

AwsAuthBackendClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClient;

AwsAuthBackendClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClient;

AwsAuthBackendClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClient;

AwsAuthBackendClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsAuthBackendClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsAuthBackendClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsAuthBackendClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValuesInput">allowedStsHeaderValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">ec2EndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">iamEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">iamServerIdHeaderValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput">identityTokenAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">stsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">stsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput">useStsRegionFromClientInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValues">allowedStsHeaderValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">ec2Endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">iamServerIdHeaderValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient">useStsRegionFromClient</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `allowedStsHeaderValuesInput`<sup>Optional</sup> <a name="allowedStsHeaderValuesInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedStsHeaderValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ec2EndpointInput`<sup>Optional</sup> <a name="ec2EndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```java
public java.lang.String getEc2EndpointInput();
```

- *Type:* java.lang.String

---

##### `iamEndpointInput`<sup>Optional</sup> <a name="iamEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```java
public java.lang.String getIamEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamServerIdHeaderValueInput`<sup>Optional</sup> <a name="iamServerIdHeaderValueInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```java
public java.lang.String getIamServerIdHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceInput`<sup>Optional</sup> <a name="identityTokenAudienceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput"></a>

```java
public java.lang.String getIdentityTokenAudienceInput();
```

- *Type:* java.lang.String

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `stsEndpointInput`<sup>Optional</sup> <a name="stsEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```java
public java.lang.String getStsEndpointInput();
```

- *Type:* java.lang.String

---

##### `stsRegionInput`<sup>Optional</sup> <a name="stsRegionInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```java
public java.lang.String getStsRegionInput();
```

- *Type:* java.lang.String

---

##### `useStsRegionFromClientInput`<sup>Optional</sup> <a name="useStsRegionFromClientInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput"></a>

```java
public java.lang.Boolean|IResolvable getUseStsRegionFromClientInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `allowedStsHeaderValues`<sup>Required</sup> <a name="allowedStsHeaderValues" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValues"></a>

```java
public java.util.List<java.lang.String> getAllowedStsHeaderValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ec2Endpoint`<sup>Required</sup> <a name="ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```java
public java.lang.String getEc2Endpoint();
```

- *Type:* java.lang.String

---

##### `iamEndpoint`<sup>Required</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```java
public java.lang.String getIamEndpoint();
```

- *Type:* java.lang.String

---

##### `iamServerIdHeaderValue`<sup>Required</sup> <a name="iamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```java
public java.lang.String getIamServerIdHeaderValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudience`<sup>Required</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `stsEndpoint`<sup>Required</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

---

##### `stsRegion`<sup>Required</sup> <a name="stsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```java
public java.lang.String getStsRegion();
```

- *Type:* java.lang.String

---

##### `useStsRegionFromClient`<sup>Required</sup> <a name="useStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient"></a>

```java
public java.lang.Boolean|IResolvable getUseStsRegionFromClient();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_client.AwsAuthBackendClientConfig;

AwsAuthBackendClientConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accessKey(java.lang.String)
//  .allowedStsHeaderValues(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .ec2Endpoint(java.lang.String)
//  .iamEndpoint(java.lang.String)
//  .iamServerIdHeaderValue(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .namespace(java.lang.String)
//  .roleArn(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .secretKey(java.lang.String)
//  .stsEndpoint(java.lang.String)
//  .stsRegion(java.lang.String)
//  .useStsRegionFromClient(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.allowedStsHeaderValues">allowedStsHeaderValues</a></code> | <code>java.util.List<java.lang.String></code> | List of additional headers that are allowed to be in STS request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">ec2Endpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">iamServerIdHeaderValue</a></code> | <code>java.lang.String</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient">useStsRegionFromClient</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `allowedStsHeaderValues`<sup>Optional</sup> <a name="allowedStsHeaderValues" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.allowedStsHeaderValues"></a>

```java
public java.util.List<java.lang.String> getAllowedStsHeaderValues();
```

- *Type:* java.util.List<java.lang.String>

List of additional headers that are allowed to be in STS request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#allowed_sts_header_values AwsAuthBackendClient#allowed_sts_header_values}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#disable_automated_rotation AwsAuthBackendClient#disable_automated_rotation}

---

##### `ec2Endpoint`<sup>Optional</sup> <a name="ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```java
public java.lang.String getEc2Endpoint();
```

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `iamEndpoint`<sup>Optional</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```java
public java.lang.String getIamEndpoint();
```

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `iamServerIdHeaderValue`<sup>Optional</sup> <a name="iamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```java
public java.lang.String getIamServerIdHeaderValue();
```

- *Type:* java.lang.String

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_period AwsAuthBackendClient#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_schedule AwsAuthBackendClient#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#rotation_window AwsAuthBackendClient#rotation_window}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```java
public java.lang.String getStsRegion();
```

- *Type:* java.lang.String

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `useStsRegionFromClient`<sup>Optional</sup> <a name="useStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient"></a>

```java
public java.lang.Boolean|IResolvable getUseStsRegionFromClient();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---



