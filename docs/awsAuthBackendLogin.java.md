# `awsAuthBackendLogin` Submodule <a name="`awsAuthBackendLogin` Submodule" id="@cdktf/provider-vault.awsAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendLogin <a name="AwsAuthBackendLogin" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLogin;

AwsAuthBackendLogin.Builder.create(Construct scope, java.lang.String id)
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
//  .backend(java.lang.String)
//  .iamHttpRequestMethod(java.lang.String)
//  .iamRequestBody(java.lang.String)
//  .iamRequestHeaders(java.lang.String)
//  .iamRequestUrl(java.lang.String)
//  .id(java.lang.String)
//  .identity(java.lang.String)
//  .namespace(java.lang.String)
//  .nonce(java.lang.String)
//  .pkcs7(java.lang.String)
//  .role(java.lang.String)
//  .signature(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamHttpRequestMethod">iamHttpRequestMethod</a></code> | <code>java.lang.String</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestBody">iamRequestBody</a></code> | <code>java.lang.String</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestHeaders">iamRequestHeaders</a></code> | <code>java.lang.String</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestUrl">iamRequestUrl</a></code> | <code>java.lang.String</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.identity">identity</a></code> | <code>java.lang.String</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.nonce">nonce</a></code> | <code>java.lang.String</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.pkcs7">pkcs7</a></code> | <code>java.lang.String</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.signature">signature</a></code> | <code>java.lang.String</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `iamHttpRequestMethod`<sup>Optional</sup> <a name="iamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamHttpRequestMethod"></a>

- *Type:* java.lang.String

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `iamRequestBody`<sup>Optional</sup> <a name="iamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestBody"></a>

- *Type:* java.lang.String

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `iamRequestHeaders`<sup>Optional</sup> <a name="iamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestHeaders"></a>

- *Type:* java.lang.String

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `iamRequestUrl`<sup>Optional</sup> <a name="iamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestUrl"></a>

- *Type:* java.lang.String

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `nonce`<sup>Optional</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.nonce"></a>

- *Type:* java.lang.String

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `pkcs7`<sup>Optional</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.pkcs7"></a>

- *Type:* java.lang.String

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.role"></a>

- *Type:* java.lang.String

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.signature"></a>

- *Type:* java.lang.String

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod">resetIamHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody">resetIamRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders">resetIamRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl">resetIamRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce">resetNonce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7">resetPkcs7</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetIamHttpRequestMethod` <a name="resetIamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod"></a>

```java
public void resetIamHttpRequestMethod()
```

##### `resetIamRequestBody` <a name="resetIamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody"></a>

```java
public void resetIamRequestBody()
```

##### `resetIamRequestHeaders` <a name="resetIamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders"></a>

```java
public void resetIamRequestHeaders()
```

##### `resetIamRequestUrl` <a name="resetIamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl"></a>

```java
public void resetIamRequestUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNonce` <a name="resetNonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce"></a>

```java
public void resetNonce()
```

##### `resetPkcs7` <a name="resetPkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7"></a>

```java
public void resetPkcs7()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole"></a>

```java
public void resetRole()
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature"></a>

```java
public void resetSignature()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLogin;

AwsAuthBackendLogin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLogin;

AwsAuthBackendLogin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLogin;

AwsAuthBackendLogin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLogin;

AwsAuthBackendLogin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsAuthBackendLogin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsAuthBackendLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime">leaseStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable">renewable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput">iamHttpRequestMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput">iamRequestBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput">iamRequestHeadersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput">iamRequestUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput">nonceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input">pkcs7Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput">signatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod">iamHttpRequestMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody">iamRequestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders">iamRequestHeaders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl">iamRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce">nonce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7">pkcs7</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime"></a>

```java
public java.lang.String getLeaseStartTime();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable"></a>

```java
public IResolvable getRenewable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `iamHttpRequestMethodInput`<sup>Optional</sup> <a name="iamHttpRequestMethodInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput"></a>

```java
public java.lang.String getIamHttpRequestMethodInput();
```

- *Type:* java.lang.String

---

##### `iamRequestBodyInput`<sup>Optional</sup> <a name="iamRequestBodyInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput"></a>

```java
public java.lang.String getIamRequestBodyInput();
```

- *Type:* java.lang.String

---

##### `iamRequestHeadersInput`<sup>Optional</sup> <a name="iamRequestHeadersInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput"></a>

```java
public java.lang.String getIamRequestHeadersInput();
```

- *Type:* java.lang.String

---

##### `iamRequestUrlInput`<sup>Optional</sup> <a name="iamRequestUrlInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput"></a>

```java
public java.lang.String getIamRequestUrlInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nonceInput`<sup>Optional</sup> <a name="nonceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput"></a>

```java
public java.lang.String getNonceInput();
```

- *Type:* java.lang.String

---

##### `pkcs7Input`<sup>Optional</sup> <a name="pkcs7Input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input"></a>

```java
public java.lang.String getPkcs7Input();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput"></a>

```java
public java.lang.String getSignatureInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `iamHttpRequestMethod`<sup>Required</sup> <a name="iamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod"></a>

```java
public java.lang.String getIamHttpRequestMethod();
```

- *Type:* java.lang.String

---

##### `iamRequestBody`<sup>Required</sup> <a name="iamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody"></a>

```java
public java.lang.String getIamRequestBody();
```

- *Type:* java.lang.String

---

##### `iamRequestHeaders`<sup>Required</sup> <a name="iamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders"></a>

```java
public java.lang.String getIamRequestHeaders();
```

- *Type:* java.lang.String

---

##### `iamRequestUrl`<sup>Required</sup> <a name="iamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl"></a>

```java
public java.lang.String getIamRequestUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nonce`<sup>Required</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce"></a>

```java
public java.lang.String getNonce();
```

- *Type:* java.lang.String

---

##### `pkcs7`<sup>Required</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7"></a>

```java
public java.lang.String getPkcs7();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendLoginConfig <a name="AwsAuthBackendLoginConfig" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_login.AwsAuthBackendLoginConfig;

AwsAuthBackendLoginConfig.builder()
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
//  .backend(java.lang.String)
//  .iamHttpRequestMethod(java.lang.String)
//  .iamRequestBody(java.lang.String)
//  .iamRequestHeaders(java.lang.String)
//  .iamRequestUrl(java.lang.String)
//  .id(java.lang.String)
//  .identity(java.lang.String)
//  .namespace(java.lang.String)
//  .nonce(java.lang.String)
//  .pkcs7(java.lang.String)
//  .role(java.lang.String)
//  .signature(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod">iamHttpRequestMethod</a></code> | <code>java.lang.String</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody">iamRequestBody</a></code> | <code>java.lang.String</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders">iamRequestHeaders</a></code> | <code>java.lang.String</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl">iamRequestUrl</a></code> | <code>java.lang.String</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity">identity</a></code> | <code>java.lang.String</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce">nonce</a></code> | <code>java.lang.String</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7">pkcs7</a></code> | <code>java.lang.String</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role">role</a></code> | <code>java.lang.String</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature">signature</a></code> | <code>java.lang.String</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `iamHttpRequestMethod`<sup>Optional</sup> <a name="iamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod"></a>

```java
public java.lang.String getIamHttpRequestMethod();
```

- *Type:* java.lang.String

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `iamRequestBody`<sup>Optional</sup> <a name="iamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody"></a>

```java
public java.lang.String getIamRequestBody();
```

- *Type:* java.lang.String

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `iamRequestHeaders`<sup>Optional</sup> <a name="iamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders"></a>

```java
public java.lang.String getIamRequestHeaders();
```

- *Type:* java.lang.String

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `iamRequestUrl`<sup>Optional</sup> <a name="iamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl"></a>

```java
public java.lang.String getIamRequestUrl();
```

- *Type:* java.lang.String

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `nonce`<sup>Optional</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce"></a>

```java
public java.lang.String getNonce();
```

- *Type:* java.lang.String

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `pkcs7`<sup>Optional</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7"></a>

```java
public java.lang.String getPkcs7();
```

- *Type:* java.lang.String

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---



