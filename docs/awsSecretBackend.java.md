# `awsSecretBackend` Submodule <a name="`awsSecretBackend` Submodule" id="@cdktf/provider-vault.awsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackend <a name="AwsSecretBackend" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend vault_aws_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackend;

AwsSecretBackend.Builder.create(Construct scope, java.lang.String id)
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
//  .accessKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .iamEndpoint(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretKey(java.lang.String)
//  .stsEndpoint(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#description AwsSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `iamEndpoint`<sup>Optional</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.iamEndpoint"></a>

- *Type:* java.lang.String

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenAudience"></a>

- *Type:* java.lang.String

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_audience AwsSecretBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_key AwsSecretBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_ttl AwsSecretBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#local AwsSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#path AwsSecretBackend#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#region AwsSecretBackend#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#role_arn AwsSecretBackend#role_arn}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.stsEndpoint"></a>

- *Type:* java.lang.String

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#username_template AwsSecretBackend#username_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint">resetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenAudience">resetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint">resetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetIamEndpoint` <a name="resetIamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint"></a>

```java
public void resetIamEndpoint()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudience` <a name="resetIdentityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenAudience"></a>

```java
public void resetIdentityTokenAudience()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetStsEndpoint` <a name="resetStsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint"></a>

```java
public void resetStsEndpoint()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackend;

AwsSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackend;

AwsSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackend;

AwsSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackend;

AwsSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput">iamEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudienceInput">identityTokenAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput">stsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamEndpointInput`<sup>Optional</sup> <a name="iamEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput"></a>

```java
public java.lang.String getIamEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceInput`<sup>Optional</sup> <a name="identityTokenAudienceInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudienceInput"></a>

```java
public java.lang.String getIdentityTokenAudienceInput();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `stsEndpointInput`<sup>Optional</sup> <a name="stsEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput"></a>

```java
public java.lang.String getStsEndpointInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamEndpoint`<sup>Required</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint"></a>

```java
public java.lang.String getIamEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudience`<sup>Required</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `stsEndpoint`<sup>Required</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendConfig <a name="AwsSecretBackendConfig" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend.AwsSecretBackendConfig;

AwsSecretBackendConfig.builder()
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
//  .accessKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .iamEndpoint(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretKey(java.lang.String)
//  .stsEndpoint(java.lang.String)
//  .usernameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint">iamEndpoint</a></code> | <code>java.lang.String</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region">region</a></code> | <code>java.lang.String</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#description AwsSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `iamEndpoint`<sup>Optional</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint"></a>

```java
public java.lang.String getIamEndpoint();
```

- *Type:* java.lang.String

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_audience AwsSecretBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_key AwsSecretBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#identity_token_ttl AwsSecretBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#local AwsSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#path AwsSecretBackend#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#region AwsSecretBackend#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#role_arn AwsSecretBackend#role_arn}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/aws_secret_backend#username_template AwsSecretBackend#username_template}

---



