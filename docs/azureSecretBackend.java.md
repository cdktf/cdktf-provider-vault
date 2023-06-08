# `vault_azure_secret_backend`

Refer to the Terraform Registory for docs: [`vault_azure_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend).

# `azureSecretBackend` Submodule <a name="`azureSecretBackend` Submodule" id="@cdktf/provider-vault.azureSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackend <a name="AzureSecretBackend" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend vault_azure_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend.AzureSecretBackend;

AzureSecretBackend.Builder.create(Construct scope, java.lang.String id)
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
    .subscriptionId(java.lang.String)
    .tenantId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .environment(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .useMicrosoftGraphApi(java.lang.Boolean)
//  .useMicrosoftGraphApi(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription id for the Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.useMicrosoftGraphApi">useMicrosoftGraphApi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use the Microsoft Graph API. Should be set to true on vault-1.10+. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The subscription id for the Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#client_id AzureSecretBackend#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#client_secret AzureSecretBackend#client_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#description AzureSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#disable_remount AzureSecretBackend#disable_remount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#environment AzureSecretBackend#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#namespace AzureSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#path AzureSecretBackend#path}

---

##### `useMicrosoftGraphApi`<sup>Optional</sup> <a name="useMicrosoftGraphApi" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.Initializer.parameter.useMicrosoftGraphApi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use the Microsoft Graph API. Should be set to true on vault-1.10+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#use_microsoft_graph_api AzureSecretBackend#use_microsoft_graph_api}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetUseMicrosoftGraphApi">resetUseMicrosoftGraphApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetUseMicrosoftGraphApi` <a name="resetUseMicrosoftGraphApi" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.resetUseMicrosoftGraphApi"></a>

```java
public void resetUseMicrosoftGraphApi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend.AzureSecretBackend;

AzureSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend.AzureSecretBackend;

AzureSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend.AzureSecretBackend;

AzureSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.useMicrosoftGraphApiInput">useMicrosoftGraphApiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.useMicrosoftGraphApi">useMicrosoftGraphApi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `useMicrosoftGraphApiInput`<sup>Optional</sup> <a name="useMicrosoftGraphApiInput" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.useMicrosoftGraphApiInput"></a>

```java
public java.lang.Object getUseMicrosoftGraphApiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `useMicrosoftGraphApi`<sup>Required</sup> <a name="useMicrosoftGraphApi" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.useMicrosoftGraphApi"></a>

```java
public java.lang.Object getUseMicrosoftGraphApi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendConfig <a name="AzureSecretBackendConfig" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend.AzureSecretBackendConfig;

AzureSecretBackendConfig.builder()
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
    .subscriptionId(java.lang.String)
    .tenantId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .environment(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .useMicrosoftGraphApi(java.lang.Boolean)
//  .useMicrosoftGraphApi(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription id for the Azure Active Directory. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.useMicrosoftGraphApi">useMicrosoftGraphApi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use the Microsoft Graph API. Should be set to true on vault-1.10+. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The subscription id for the Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#subscription_id AzureSecretBackend#subscription_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#tenant_id AzureSecretBackend#tenant_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#client_id AzureSecretBackend#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#client_secret AzureSecretBackend#client_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#description AzureSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#disable_remount AzureSecretBackend#disable_remount}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#environment AzureSecretBackend#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#id AzureSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#namespace AzureSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#path AzureSecretBackend#path}

---

##### `useMicrosoftGraphApi`<sup>Optional</sup> <a name="useMicrosoftGraphApi" id="@cdktf/provider-vault.azureSecretBackend.AzureSecretBackendConfig.property.useMicrosoftGraphApi"></a>

```java
public java.lang.Object getUseMicrosoftGraphApi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use the Microsoft Graph API. Should be set to true on vault-1.10+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/azure_secret_backend#use_microsoft_graph_api AzureSecretBackend#use_microsoft_graph_api}

---



