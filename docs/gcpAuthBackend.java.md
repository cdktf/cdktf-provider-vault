# `gcpAuthBackend` Submodule <a name="`gcpAuthBackend` Submodule" id="@cdktf/provider-vault.gcpAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackend <a name="GcpAuthBackend" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend vault_gcp_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackend;

GcpAuthBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientEmail(java.lang.String)
//  .clientId(java.lang.String)
//  .credentials(java.lang.String)
//  .customEndpoint(GcpAuthBackendCustomEndpoint)
//  .description(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .local(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .privateKeyId(java.lang.String)
//  .projectId(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .serviceAccountEmail(java.lang.String)
//  .tune(IResolvable|java.util.List<GcpAuthBackendTune>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value for plugin identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service Account to impersonate for plugin workload identity federation. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.tune">tune</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#tune GcpAuthBackend#tune}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Optional</sup> <a name="clientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.customEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}.

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#disable_automated_rotation GcpAuthBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenAudience"></a>

- *Type:* java.lang.String

The audience claim value for plugin identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_audience GcpAuthBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_key GcpAuthBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_ttl GcpAuthBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#local GcpAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#namespace GcpAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}.

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.privateKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}.

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_period GcpAuthBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_schedule GcpAuthBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_window GcpAuthBackend#rotation_window}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

Service Account to impersonate for plugin workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#service_account_email GcpAuthBackend#service_account_email}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.tune"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#tune GcpAuthBackend#tune}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail">resetClientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenAudience">resetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId">resetPrivateKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetTune">resetTune</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint"></a>

```java
public void putCustomEndpoint(GcpAuthBackendCustomEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---

##### `putTune` <a name="putTune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putTune"></a>

```java
public void putTune(IResolvable|java.util.List<GcpAuthBackendTune> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putTune.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>>

---

##### `resetClientEmail` <a name="resetClientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail"></a>

```java
public void resetClientEmail()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableAutomatedRotation"></a>

```java
public void resetDisableAutomatedRotation()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudience` <a name="resetIdentityTokenAudience" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenAudience"></a>

```java
public void resetIdentityTokenAudience()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetPrivateKeyId` <a name="resetPrivateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId"></a>

```java
public void resetPrivateKeyId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetTune` <a name="resetTune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetTune"></a>

```java
public void resetTune()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GcpAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackend;

GcpAuthBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackend;

GcpAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackend;

GcpAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackend;

GcpAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GcpAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GcpAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GcpAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GcpAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GcpAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList">GcpAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenAudienceInput">identityTokenAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tuneInput">tuneInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint"></a>

```java
public GcpAuthBackendCustomEndpointOutputReference getCustomEndpoint();
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a>

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tune"></a>

```java
public GcpAuthBackendTuneList getTune();
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList">GcpAuthBackendTuneList</a>

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput"></a>

```java
public GcpAuthBackendCustomEndpoint getCustomEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableAutomatedRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemountInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `identityTokenAudienceInput`<sup>Optional</sup> <a name="identityTokenAudienceInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenAudienceInput"></a>

```java
public java.lang.String getIdentityTokenAudienceInput();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tuneInput"></a>

```java
public IResolvable|java.util.List<GcpAuthBackendTune> getTuneInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>>

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudience`<sup>Required</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendConfig <a name="GcpAuthBackendConfig" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendConfig;

GcpAuthBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientEmail(java.lang.String)
//  .clientId(java.lang.String)
//  .credentials(java.lang.String)
//  .customEndpoint(GcpAuthBackendCustomEndpoint)
//  .description(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenAudience(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .identityTokenTtl(java.lang.Number)
//  .local(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .privateKeyId(java.lang.String)
//  .projectId(java.lang.String)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .serviceAccountEmail(java.lang.String)
//  .tune(IResolvable|java.util.List<GcpAuthBackendTune>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenAudience">identityTokenAudience</a></code> | <code>java.lang.String</code> | The audience claim value for plugin identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service Account to impersonate for plugin workload identity federation. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.tune">tune</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#tune GcpAuthBackend#tune}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Optional</sup> <a name="clientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint"></a>

```java
public GcpAuthBackendCustomEndpoint getCustomEndpoint();
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}.

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#disable_automated_rotation GcpAuthBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenAudience"></a>

```java
public java.lang.String getIdentityTokenAudience();
```

- *Type:* java.lang.String

The audience claim value for plugin identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_audience GcpAuthBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_key GcpAuthBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#identity_token_ttl GcpAuthBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#local GcpAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#namespace GcpAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}.

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}.

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_period GcpAuthBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_schedule GcpAuthBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#rotation_window GcpAuthBackend#rotation_window}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service Account to impersonate for plugin workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#service_account_email GcpAuthBackend#service_account_email}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.tune"></a>

```java
public IResolvable|java.util.List<GcpAuthBackendTune> getTune();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#tune GcpAuthBackend#tune}.

---

### GcpAuthBackendCustomEndpoint <a name="GcpAuthBackendCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendCustomEndpoint;

GcpAuthBackendCustomEndpoint.builder()
//  .api(java.lang.String)
//  .compute(java.lang.String)
//  .crm(java.lang.String)
//  .iam(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api">api</a></code> | <code>java.lang.String</code> | Replaces the service endpoint used in API requests to https://www.googleapis.com. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute">compute</a></code> | <code>java.lang.String</code> | Replaces the service endpoint used in API requests to `https://compute.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm">crm</a></code> | <code>java.lang.String</code> | Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam">iam</a></code> | <code>java.lang.String</code> | Replaces the service endpoint used in API requests to `https://iam.googleapis.com`. |

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Replaces the service endpoint used in API requests to https://www.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#api GcpAuthBackend#api}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute"></a>

```java
public java.lang.String getCompute();
```

- *Type:* java.lang.String

Replaces the service endpoint used in API requests to `https://compute.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#compute GcpAuthBackend#compute}

---

##### `crm`<sup>Optional</sup> <a name="crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm"></a>

```java
public java.lang.String getCrm();
```

- *Type:* java.lang.String

Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#crm GcpAuthBackend#crm}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam"></a>

```java
public java.lang.String getIam();
```

- *Type:* java.lang.String

Replaces the service endpoint used in API requests to `https://iam.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#iam GcpAuthBackend#iam}

---

### GcpAuthBackendTune <a name="GcpAuthBackendTune" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendTune;

GcpAuthBackendTune.builder()
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtl(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .maxLeaseTtl(java.lang.String)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#allowed_response_headers GcpAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#audit_non_hmac_request_keys GcpAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#audit_non_hmac_response_keys GcpAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#default_lease_ttl GcpAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#listing_visibility GcpAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#max_lease_ttl GcpAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#passthrough_request_headers GcpAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#token_type GcpAuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#allowed_response_headers GcpAuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#audit_non_hmac_request_keys GcpAuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#audit_non_hmac_response_keys GcpAuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#default_lease_ttl GcpAuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#listing_visibility GcpAuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#max_lease_ttl GcpAuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#passthrough_request_headers GcpAuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend#token_type GcpAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### GcpAuthBackendCustomEndpointOutputReference <a name="GcpAuthBackendCustomEndpointOutputReference" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendCustomEndpointOutputReference;

new GcpAuthBackendCustomEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm">resetCrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam">resetIam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApi` <a name="resetApi" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi"></a>

```java
public void resetApi()
```

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute"></a>

```java
public void resetCompute()
```

##### `resetCrm` <a name="resetCrm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm"></a>

```java
public void resetCrm()
```

##### `resetIam` <a name="resetIam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam"></a>

```java
public void resetIam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput">computeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput">crmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput">iamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute">compute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm">crm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam">iam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput"></a>

```java
public java.lang.String getComputeInput();
```

- *Type:* java.lang.String

---

##### `crmInput`<sup>Optional</sup> <a name="crmInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput"></a>

```java
public java.lang.String getCrmInput();
```

- *Type:* java.lang.String

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput"></a>

```java
public java.lang.String getIamInput();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute"></a>

```java
public java.lang.String getCompute();
```

- *Type:* java.lang.String

---

##### `crm`<sup>Required</sup> <a name="crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm"></a>

```java
public java.lang.String getCrm();
```

- *Type:* java.lang.String

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam"></a>

```java
public java.lang.String getIam();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue"></a>

```java
public GcpAuthBackendCustomEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---


### GcpAuthBackendTuneList <a name="GcpAuthBackendTuneList" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendTuneList;

new GcpAuthBackendTuneList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.get"></a>

```java
public GcpAuthBackendTuneOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GcpAuthBackendTune> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>>

---


### GcpAuthBackendTuneOutputReference <a name="GcpAuthBackendTuneOutputReference" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_auth_backend.GcpAuthBackendTuneOutputReference;

new GcpAuthBackendTuneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```java
public void resetDefaultLeaseTtl()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```java
public void resetMaxLeaseTtl()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.resetTokenType"></a>

```java
public void resetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```java
public java.lang.String getDefaultLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```java
public java.lang.String getMaxLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTuneOutputReference.property.internalValue"></a>

```java
public IResolvable|GcpAuthBackendTune getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendTune">GcpAuthBackendTune</a>

---



