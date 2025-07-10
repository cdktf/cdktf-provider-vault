# `dataVaultKubernetesServiceAccountToken` Submodule <a name="`dataVaultKubernetesServiceAccountToken` Submodule" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesServiceAccountToken <a name="DataVaultKubernetesServiceAccountToken" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountToken;

DataVaultKubernetesServiceAccountToken.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .kubernetesNamespace(java.lang.String)
    .role(java.lang.String)
//  .clusterRoleBinding(java.lang.Boolean)
//  .clusterRoleBinding(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding">clusterRoleBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace"></a>

- *Type:* java.lang.String

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}

---

##### `clusterRoleBinding`<sup>Optional</sup> <a name="clusterRoleBinding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding">resetClusterRoleBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClusterRoleBinding` <a name="resetClusterRoleBinding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```java
public void resetClusterRoleBinding()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountToken;

DataVaultKubernetesServiceAccountToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountToken;

DataVaultKubernetesServiceAccountToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountToken;

DataVaultKubernetesServiceAccountToken.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountToken;

DataVaultKubernetesServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultKubernetesServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultKubernetesServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultKubernetesServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable">leaseRenewable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">serviceAccountNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken">serviceAccountToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">clusterRoleBindingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

---

##### `serviceAccountNamespace`<sup>Required</sup> <a name="serviceAccountNamespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```java
public java.lang.String getServiceAccountNamespace();
```

- *Type:* java.lang.String

---

##### `serviceAccountToken`<sup>Required</sup> <a name="serviceAccountToken" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```java
public java.lang.String getServiceAccountToken();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `clusterRoleBindingInput`<sup>Optional</sup> <a name="clusterRoleBindingInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```java
public java.lang.Object getClusterRoleBindingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```java
public java.lang.String getKubernetesNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `clusterRoleBinding`<sup>Required</sup> <a name="clusterRoleBinding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```java
public java.lang.Object getClusterRoleBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesServiceAccountTokenConfig <a name="DataVaultKubernetesServiceAccountTokenConfig" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_kubernetes_service_account_token.DataVaultKubernetesServiceAccountTokenConfig;

DataVaultKubernetesServiceAccountTokenConfig.builder()
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
    .backend(java.lang.String)
    .kubernetesNamespace(java.lang.String)
    .role(java.lang.String)
//  .clusterRoleBinding(java.lang.Boolean)
//  .clusterRoleBinding(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role">role</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}

---

##### `clusterRoleBinding`<sup>Optional</sup> <a name="clusterRoleBinding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```java
public java.lang.Object getClusterRoleBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}

---



