# `dataVaultAzureAccessCredentials` Submodule <a name="`dataVaultAzureAccessCredentials` Submodule" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultAzureAccessCredentials <a name="DataVaultAzureAccessCredentials" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_azure_access_credentials.DataVaultAzureAccessCredentials;

DataVaultAzureAccessCredentials.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .environment(java.lang.String)
//  .id(java.lang.String)
//  .maxCredValidationSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .numSecondsBetweenTests(java.lang.Number)
//  .numSequentialSuccesses(java.lang.Number)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .validateCreds(java.lang.Boolean)
//  .validateCreds(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Azure environment to use during credential validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#id DataVaultAzureAccessCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#role DataVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Azure environment to use during credential validation.

Defaults to the environment configured in the Vault backend.
Some possible values: AzurePublicCloud, AzureUSGovernmentCloud

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#id DataVaultAzureAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.maxCredValidationSeconds"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.numSecondsBetweenTests"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.numSequentialSuccesses"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.validateCreds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds">resetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests">resetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses">resetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds">resetValidateCreds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetMaxCredValidationSeconds` <a name="resetMaxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```java
public void resetMaxCredValidationSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNumSecondsBetweenTests` <a name="resetNumSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```java
public void resetNumSecondsBetweenTests()
```

##### `resetNumSequentialSuccesses` <a name="resetNumSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```java
public void resetNumSequentialSuccesses()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetValidateCreds` <a name="resetValidateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds"></a>

```java
public void resetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_azure_access_credentials.DataVaultAzureAccessCredentials;

DataVaultAzureAccessCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_azure_access_credentials.DataVaultAzureAccessCredentials;

DataVaultAzureAccessCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_azure_access_credentials.DataVaultAzureAccessCredentials;

DataVaultAzureAccessCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">maxCredValidationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">numSecondsBetweenTestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput">numSequentialSuccessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput">validateCredsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime"></a>

```java
public java.lang.String getLeaseStartTime();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxCredValidationSecondsInput`<sup>Optional</sup> <a name="maxCredValidationSecondsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```java
public java.lang.Number getMaxCredValidationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `numSecondsBetweenTestsInput`<sup>Optional</sup> <a name="numSecondsBetweenTestsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```java
public java.lang.Number getNumSecondsBetweenTestsInput();
```

- *Type:* java.lang.Number

---

##### `numSequentialSuccessesInput`<sup>Optional</sup> <a name="numSequentialSuccessesInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```java
public java.lang.Number getNumSequentialSuccessesInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `validateCredsInput`<sup>Optional</sup> <a name="validateCredsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput"></a>

```java
public java.lang.Object getValidateCredsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxCredValidationSeconds`<sup>Required</sup> <a name="maxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```java
public java.lang.Number getMaxCredValidationSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `numSecondsBetweenTests`<sup>Required</sup> <a name="numSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```java
public java.lang.Number getNumSecondsBetweenTests();
```

- *Type:* java.lang.Number

---

##### `numSequentialSuccesses`<sup>Required</sup> <a name="numSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```java
public java.lang.Number getNumSequentialSuccesses();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `validateCreds`<sup>Required</sup> <a name="validateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds"></a>

```java
public java.lang.Object getValidateCreds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultAzureAccessCredentialsConfig <a name="DataVaultAzureAccessCredentialsConfig" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_azure_access_credentials.DataVaultAzureAccessCredentialsConfig;

DataVaultAzureAccessCredentialsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .environment(java.lang.String)
//  .id(java.lang.String)
//  .maxCredValidationSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .numSecondsBetweenTests(java.lang.Number)
//  .numSequentialSuccesses(java.lang.Number)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .validateCreds(java.lang.Boolean)
//  .validateCreds(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role">role</a></code> | <code>java.lang.String</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Azure environment to use during credential validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#id DataVaultAzureAccessCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#role DataVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Azure environment to use during credential validation.

Defaults to the environment configured in the Vault backend.
Some possible values: AzurePublicCloud, AzureUSGovernmentCloud

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#id DataVaultAzureAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```java
public java.lang.Number getMaxCredValidationSeconds();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```java
public java.lang.Number getNumSecondsBetweenTests();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```java
public java.lang.Number getNumSequentialSuccesses();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```java
public java.lang.Object getValidateCreds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}

---



