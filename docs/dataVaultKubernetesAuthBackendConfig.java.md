# `data_vault_kubernetes_auth_backend_config`

Refer to the Terraform Registory for docs: [`data_vault_kubernetes_auth_backend_config`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config).

# `dataVaultKubernetesAuthBackendConfig` Submodule <a name="`dataVaultKubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesAuthBackendConfig <a name="DataVaultKubernetesAuthBackendConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfig;

DataVaultKubernetesAuthBackendConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .disableIssValidation(java.lang.Boolean)
//  .disableIssValidation(IResolvable)
//  .disableLocalCaJwt(java.lang.Boolean)
//  .disableLocalCaJwt(IResolvable)
//  .id(java.lang.String)
//  .issuer(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .namespace(java.lang.String)
//  .pemKeys(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* java.lang.String

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost"></a>

- *Type:* java.lang.String

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.pemKeys"></a>

- *Type:* java.util.List<java.lang.String>

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation">resetDisableIssValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost">resetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys">resetPemKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisableIssValidation` <a name="resetDisableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```java
public void resetDisableIssValidation()
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```java
public void resetDisableLocalCaJwt()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```java
public void resetKubernetesCaCert()
```

##### `resetKubernetesHost` <a name="resetKubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost"></a>

```java
public void resetKubernetesHost()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPemKeys` <a name="resetPemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys"></a>

```java
public void resetPemKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfig;

DataVaultKubernetesAuthBackendConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfig;

DataVaultKubernetesAuthBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfig;

DataVaultKubernetesAuthBackendConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfig;

DataVaultKubernetesAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultKubernetesAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultKubernetesAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultKubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput">disableIssValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput">pemKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disableIssValidationInput`<sup>Optional</sup> <a name="disableIssValidationInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```java
public java.lang.Object getDisableIssValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```java
public java.lang.Object getDisableLocalCaJwtInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```java
public java.lang.String getKubernetesCaCertInput();
```

- *Type:* java.lang.String

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```java
public java.lang.String getKubernetesHostInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pemKeysInput`<sup>Optional</sup> <a name="pemKeysInput" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput"></a>

```java
public java.util.List<java.lang.String> getPemKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disableIssValidation`<sup>Required</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation"></a>

```java
public java.lang.Object getDisableIssValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Object getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pemKeys`<sup>Required</sup> <a name="pemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys"></a>

```java
public java.util.List<java.lang.String> getPemKeys();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesAuthBackendConfigConfig <a name="DataVaultKubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_auth_backend_config.DataVaultKubernetesAuthBackendConfigConfig;

DataVaultKubernetesAuthBackendConfigConfig.builder()
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
//  .disableIssValidation(java.lang.Boolean)
//  .disableIssValidation(IResolvable)
//  .disableLocalCaJwt(java.lang.Boolean)
//  .disableLocalCaJwt(IResolvable)
//  .id(java.lang.String)
//  .issuer(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .namespace(java.lang.String)
//  .pemKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```java
public java.lang.Object getDisableIssValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Object getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```java
public java.util.List<java.lang.String> getPemKeys();
```

- *Type:* java.util.List<java.lang.String>

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}

---



