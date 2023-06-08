# `vault_kmip_secret_role`

Refer to the Terraform Registory for docs: [`vault_kmip_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role).

# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktf/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.Builder.create(Construct scope, java.lang.String id)
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
    .path(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .operationActivate(java.lang.Boolean)
//  .operationActivate(IResolvable)
//  .operationAddAttribute(java.lang.Boolean)
//  .operationAddAttribute(IResolvable)
//  .operationAll(java.lang.Boolean)
//  .operationAll(IResolvable)
//  .operationCreate(java.lang.Boolean)
//  .operationCreate(IResolvable)
//  .operationDestroy(java.lang.Boolean)
//  .operationDestroy(IResolvable)
//  .operationDiscoverVersions(java.lang.Boolean)
//  .operationDiscoverVersions(IResolvable)
//  .operationGet(java.lang.Boolean)
//  .operationGet(IResolvable)
//  .operationGetAttributeList(java.lang.Boolean)
//  .operationGetAttributeList(IResolvable)
//  .operationGetAttributes(java.lang.Boolean)
//  .operationGetAttributes(IResolvable)
//  .operationLocate(java.lang.Boolean)
//  .operationLocate(IResolvable)
//  .operationNone(java.lang.Boolean)
//  .operationNone(IResolvable)
//  .operationRegister(java.lang.Boolean)
//  .operationRegister(IResolvable)
//  .operationRekey(java.lang.Boolean)
//  .operationRekey(IResolvable)
//  .operationRevoke(java.lang.Boolean)
//  .operationRevoke(IResolvable)
//  .tlsClientKeyBits(java.lang.Number)
//  .tlsClientKeyType(java.lang.String)
//  .tlsClientTtl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll">operationAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet">operationGet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone">operationNone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | Client certificate TTL in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits"></a>

- *Type:* java.lang.Number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType"></a>

- *Type:* java.lang.String

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl"></a>

- *Type:* java.lang.Number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">resetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">resetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">resetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">resetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">resetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">resetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">resetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">resetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">resetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">resetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">resetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">resetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">resetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">resetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">resetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">resetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">resetTlsClientTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOperationActivate` <a name="resetOperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```java
public void resetOperationActivate()
```

##### `resetOperationAddAttribute` <a name="resetOperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```java
public void resetOperationAddAttribute()
```

##### `resetOperationAll` <a name="resetOperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```java
public void resetOperationAll()
```

##### `resetOperationCreate` <a name="resetOperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```java
public void resetOperationCreate()
```

##### `resetOperationDestroy` <a name="resetOperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```java
public void resetOperationDestroy()
```

##### `resetOperationDiscoverVersions` <a name="resetOperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```java
public void resetOperationDiscoverVersions()
```

##### `resetOperationGet` <a name="resetOperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```java
public void resetOperationGet()
```

##### `resetOperationGetAttributeList` <a name="resetOperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```java
public void resetOperationGetAttributeList()
```

##### `resetOperationGetAttributes` <a name="resetOperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```java
public void resetOperationGetAttributes()
```

##### `resetOperationLocate` <a name="resetOperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```java
public void resetOperationLocate()
```

##### `resetOperationNone` <a name="resetOperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```java
public void resetOperationNone()
```

##### `resetOperationRegister` <a name="resetOperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```java
public void resetOperationRegister()
```

##### `resetOperationRekey` <a name="resetOperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```java
public void resetOperationRekey()
```

##### `resetOperationRevoke` <a name="resetOperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```java
public void resetOperationRevoke()
```

##### `resetTlsClientKeyBits` <a name="resetTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```java
public void resetTlsClientKeyBits()
```

##### `resetTlsClientKeyType` <a name="resetTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```java
public void resetTlsClientKeyType()
```

##### `resetTlsClientTtl` <a name="resetTlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```java
public void resetTlsClientTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">operationActivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">operationAddAttributeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">operationAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">operationCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">operationDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">operationDiscoverVersionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">operationGetAttributeListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">operationGetAttributesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">operationGetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">operationLocateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">operationNoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">operationRegisterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">operationRekeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">operationRevokeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">tlsClientKeyBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">tlsClientKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">tlsClientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">operationAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">operationGet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">operationNone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operationActivateInput`<sup>Optional</sup> <a name="operationActivateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```java
public java.lang.Object getOperationActivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationAddAttributeInput`<sup>Optional</sup> <a name="operationAddAttributeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```java
public java.lang.Object getOperationAddAttributeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationAllInput`<sup>Optional</sup> <a name="operationAllInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```java
public java.lang.Object getOperationAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationCreateInput`<sup>Optional</sup> <a name="operationCreateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```java
public java.lang.Object getOperationCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationDestroyInput`<sup>Optional</sup> <a name="operationDestroyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```java
public java.lang.Object getOperationDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationDiscoverVersionsInput`<sup>Optional</sup> <a name="operationDiscoverVersionsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```java
public java.lang.Object getOperationDiscoverVersionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGetAttributeListInput`<sup>Optional</sup> <a name="operationGetAttributeListInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```java
public java.lang.Object getOperationGetAttributeListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGetAttributesInput`<sup>Optional</sup> <a name="operationGetAttributesInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```java
public java.lang.Object getOperationGetAttributesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGetInput`<sup>Optional</sup> <a name="operationGetInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```java
public java.lang.Object getOperationGetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationLocateInput`<sup>Optional</sup> <a name="operationLocateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```java
public java.lang.Object getOperationLocateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationNoneInput`<sup>Optional</sup> <a name="operationNoneInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```java
public java.lang.Object getOperationNoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRegisterInput`<sup>Optional</sup> <a name="operationRegisterInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```java
public java.lang.Object getOperationRegisterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRekeyInput`<sup>Optional</sup> <a name="operationRekeyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```java
public java.lang.Object getOperationRekeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRevokeInput`<sup>Optional</sup> <a name="operationRevokeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```java
public java.lang.Object getOperationRevokeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tlsClientKeyBitsInput`<sup>Optional</sup> <a name="tlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```java
public java.lang.Number getTlsClientKeyBitsInput();
```

- *Type:* java.lang.Number

---

##### `tlsClientKeyTypeInput`<sup>Optional</sup> <a name="tlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```java
public java.lang.String getTlsClientKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `tlsClientTtlInput`<sup>Optional</sup> <a name="tlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```java
public java.lang.Number getTlsClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operationActivate`<sup>Required</sup> <a name="operationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```java
public java.lang.Object getOperationActivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationAddAttribute`<sup>Required</sup> <a name="operationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```java
public java.lang.Object getOperationAddAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationAll`<sup>Required</sup> <a name="operationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```java
public java.lang.Object getOperationAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationCreate`<sup>Required</sup> <a name="operationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```java
public java.lang.Object getOperationCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationDestroy`<sup>Required</sup> <a name="operationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```java
public java.lang.Object getOperationDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationDiscoverVersions`<sup>Required</sup> <a name="operationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```java
public java.lang.Object getOperationDiscoverVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGet`<sup>Required</sup> <a name="operationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```java
public java.lang.Object getOperationGet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGetAttributeList`<sup>Required</sup> <a name="operationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```java
public java.lang.Object getOperationGetAttributeList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationGetAttributes`<sup>Required</sup> <a name="operationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```java
public java.lang.Object getOperationGetAttributes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationLocate`<sup>Required</sup> <a name="operationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```java
public java.lang.Object getOperationLocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationNone`<sup>Required</sup> <a name="operationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```java
public java.lang.Object getOperationNone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRegister`<sup>Required</sup> <a name="operationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```java
public java.lang.Object getOperationRegister();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRekey`<sup>Required</sup> <a name="operationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```java
public java.lang.Object getOperationRekey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationRevoke`<sup>Required</sup> <a name="operationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```java
public java.lang.Object getOperationRevoke();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tlsClientKeyBits`<sup>Required</sup> <a name="tlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```java
public java.lang.Number getTlsClientKeyBits();
```

- *Type:* java.lang.Number

---

##### `tlsClientKeyType`<sup>Required</sup> <a name="tlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```java
public java.lang.String getTlsClientKeyType();
```

- *Type:* java.lang.String

---

##### `tlsClientTtl`<sup>Required</sup> <a name="tlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```java
public java.lang.Number getTlsClientTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kmip_secret_role.KmipSecretRoleConfig;

KmipSecretRoleConfig.builder()
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
    .path(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .operationActivate(java.lang.Boolean)
//  .operationActivate(IResolvable)
//  .operationAddAttribute(java.lang.Boolean)
//  .operationAddAttribute(IResolvable)
//  .operationAll(java.lang.Boolean)
//  .operationAll(IResolvable)
//  .operationCreate(java.lang.Boolean)
//  .operationCreate(IResolvable)
//  .operationDestroy(java.lang.Boolean)
//  .operationDestroy(IResolvable)
//  .operationDiscoverVersions(java.lang.Boolean)
//  .operationDiscoverVersions(IResolvable)
//  .operationGet(java.lang.Boolean)
//  .operationGet(IResolvable)
//  .operationGetAttributeList(java.lang.Boolean)
//  .operationGetAttributeList(IResolvable)
//  .operationGetAttributes(java.lang.Boolean)
//  .operationGetAttributes(IResolvable)
//  .operationLocate(java.lang.Boolean)
//  .operationLocate(IResolvable)
//  .operationNone(java.lang.Boolean)
//  .operationNone(IResolvable)
//  .operationRegister(java.lang.Boolean)
//  .operationRegister(IResolvable)
//  .operationRekey(java.lang.Boolean)
//  .operationRekey(IResolvable)
//  .operationRevoke(java.lang.Boolean)
//  .operationRevoke(IResolvable)
//  .tlsClientKeyBits(java.lang.Number)
//  .tlsClientKeyType(java.lang.String)
//  .tlsClientTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">operationAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">operationGet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">operationNone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | Client certificate TTL in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```java
public java.lang.Object getOperationActivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```java
public java.lang.Object getOperationAddAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```java
public java.lang.Object getOperationAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```java
public java.lang.Object getOperationCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```java
public java.lang.Object getOperationDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```java
public java.lang.Object getOperationDiscoverVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```java
public java.lang.Object getOperationGet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```java
public java.lang.Object getOperationGetAttributeList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```java
public java.lang.Object getOperationGetAttributes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```java
public java.lang.Object getOperationLocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```java
public java.lang.Object getOperationNone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```java
public java.lang.Object getOperationRegister();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```java
public java.lang.Object getOperationRekey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```java
public java.lang.Object getOperationRevoke();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```java
public java.lang.Number getTlsClientKeyBits();
```

- *Type:* java.lang.Number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```java
public java.lang.String getTlsClientKeyType();
```

- *Type:* java.lang.String

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```java
public java.lang.Number getTlsClientTtl();
```

- *Type:* java.lang.Number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



